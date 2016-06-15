import React from 'react'
import { Table, Icon, Button, Input } from 'antd';
var config = require('./setting.js');
const UserDel =  config.host + '/api/user/del';
const UserList = config.host + '/api/user/list';
const UserReset = config.host + '/api/user/reset';
const columns = [
    {
    title: '系统编号',
    dataIndex: 'key',
    key: 'key',
    sorter: (a, b) => a.key - b.key
   },
    {
    title: '税务号码',
    dataIndex: 'taxno',
    key: 'taxno',
    sorter: (a, b) => a.taxno - b.taxno
   },{
    title: '姓名',
    dataIndex: 'username',
    key: 'username'
}, {
    title: '新人事编号',
    dataIndex: 'personno',
    key: 'personno'
}]

/*{
    title: '重置密码',
    key: 'operation',
    render(text, record) {
        var href_url = "#/admin/userdetail?id=" + record.key;
        return (
            <span>
        <a href={ href_url }>重置</a>
      </span>
        );
    }}*/

const UserGridView = React.createClass({
    getInitialState() {
        return {
            selectedRowKeys: [],  // 这里配置默认勾选列
            loading: false,
            data:[]
        };
    },
     getKeyWord(e){
        this.setState({keyWord: e.target.value});
        //console.log('value is', e.target.value);
    },
    startDel() {
        this.setState({ loading: false });
        //console.log('收到表单值：', this.props.form.getFieldsValue());
        var array = this.state.selectedRowKeys;
        var json = "itemids=" + array.toString();
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", UserDel, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               var res = xhr.responseText;
               var jsonObj = eval("(" + res + ")");
                _this.setState({data:jsonObj.data});

            }
          }
        }
        xhr.send(json);
        // 模拟 ajax 请求，完成后清空
    },

    startReset() {
        this.setState({ loading: false });
        //console.log('收到表单值：', this.props.form.getFieldsValue());
        var array = this.state.selectedRowKeys;
        var json = "itemids=" + array.toString();
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", UserReset, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              window.alert('重置成功');
            }
          }
        }
        xhr.send(json);
        // 模拟 ajax 请求，完成后清空
    },

     startAdd() {
        window.location.href = "#/admin/useradd";
    },

    startSearch(){

      var key_word = this.state.keyWord;
      var addr = UserList + "?keyword=" + key_word;
      var _this = this;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', addr, true);
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
              _this.setState({data:jsonObj.data});

          }
      }
      xhr.send();
        //this.setState({'data': []});
    },

    onSelectChange(selectedRowKeys) {
       console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    },

    componentDidMount(){
      var is_login = window.localStorage.getItem('token');
      if (is_login == null){
          window.location.href = "#/login"
      }
      var _this = this;
      console.log(is_login);
     var xhr = new XMLHttpRequest();
      xhr.open('GET', UserList, true);
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
              _this.setState({data:jsonObj.data});

          }
      }
      xhr.send();


    },
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
         const pagination = {
          pageSize : 20,
          showSizeChanger: true
          };
      const hasSelected = selectedRowKeys.length > 0;

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                 <Input  id="SearchInput" placeholder="请输入税号或者姓名" onChange={this.getKeyWord} />
                  <Button type="primary" onClick={this.startSearch}>查询</Button>
                             <span style={{ marginLeft: 8 }}></span>
                  <Button type="primary" onClick={this.startAdd}>添加</Button>
                             <span style={{ marginLeft: 8 }}></span>
                    <Button type="primary" onClick={this.startDel} disabled={!hasSelected}>删除</Button>
                             <span style={{ marginLeft: 8 }}></span>
                   <Button type="primary" onClick={this.startReset} disabled={!hasSelected}>重置密码</Button>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>

                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pagination} />
            </div>
        );
    }
});

export default UserGridView;
