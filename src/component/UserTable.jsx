import React from 'react'
import { Table, Icon, Button} from 'antd';

var fetch = require('node-fetch');

const columns = [
    {
    title: '税务号码',
    dataIndex: 'key',
    key: 'key'
   },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '帐号',
    dataIndex: 'account',
    key: 'account'
}, {
    title: '新人事编号',
    dataIndex: 'passno',
    key: 'passno'
}, {
    title: '操作',
    key: 'operation',
    render(text, record) {
        var href_url = "#/admin/detail?name=" + record.key;
        
        return (
            <span>
        <a href={ href_url }>重置-{record.name}-密码</a>
      </span>
        );
    }
}];

const UserGridView = React.createClass({
    getInitialState() {
        return {
            selectedRowKeys: [],  // 这里配置默认勾选列
            loading: false,
            data:[]
        };
    },
    startDel() {
        this.setState({ loading: true });
        // 模拟 ajax 请求，完成后清空
       this.state.data.pop();
        console.log('selectedRowKeys changed: ', this.state.selectedRowKeys);
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false
            });
        }, 1000);
    },
     startAdd() {
        window.location.href = "#/admin/users";
    },
    onSelectChange(selectedRowKeys) {
       //console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    },

    componentDidMount(){
      var is_login = window.localStorage.getItem('token');
      if (is_login == null){
          window.location.href = "#/login"
      }
      var _this = this;
      console.log(is_login);
      fetch('http://localhost:8989/users/list').then(function(res){
        return res.json();
      }).then(function(json){
        _this.setState({data:json});
      });
    },
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
      const hasSelected = selectedRowKeys.length > 0;

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                  <Button type="primary" onClick={this.startAdd}>添加</Button>
                             <span style={{ marginLeft: 8 }}></span>
                    <Button type="primary" onClick={this.startDel}
                            disabled={!hasSelected} loading={loading}>删除</Button>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
                                 
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
});

export default UserGridView;