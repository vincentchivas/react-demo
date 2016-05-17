import React from 'react'
import { Table, Icon, Button, DatePicker, Input } from 'antd';

var config = require('./setting.js');
const SalaryAddr =  config.host + '/api/salary/list';
const DownloadAddr = config.host + '/api/salary/download';
const SalaryDel = config.host + '/api/salary/del';


const MonthPicker = DatePicker.MonthPicker;
const columns = [
    {
    title: '自动编号',
    dataIndex: 'key',
    key: 'key'
   },
    {
    title: '序号',
    dataIndex: '序号',
    key: '序号',
     sorter: (a, b) => a.序号 - b.序号
   },
    {
    title: '税务号码',
    dataIndex: '税务号码',
    key: '税务号码'
   },{
    title: '姓名',
    dataIndex: '姓名',
    key: '姓名'
}, 
{
    title: '时间',
    dataIndex: '时间',
    key: '时间'
},
{
    title: '奖励性绩效',
    dataIndex: '奖励性绩效',
    key: '奖励性绩效'
}, {
    title: '代扣所得税',
    dataIndex: '代扣所得税',
    key: '代扣所得税'
}, {
    title: '实发工资',
    dataIndex: '实发数',
    key: '实发数'
}, 
{
    title: '是否查看',
    dataIndex: 'hascheck',
    key: 'hascheck'
}, 
{
    title: '是否下载',
    dataIndex: 'download',
    key: 'download'
}, 
{
    title: '操作',
    key: 'operation',
    render(text, record) {
      var role = window.localStorage.getItem('role');
      var taxno = window.localStorage.getItem('taxno');
      var gz_url = "#/"+ role +"/gzdetail?id=" + record.id + "&tmpl=gzb";
      var jx_url = "#/"+ role +"/jxdetail?id=" + record.id + "&tmpl=jxb";
      var sw_url = "#/"+ role +"/swdetail?id=" + record.id + "&tmpl=swb";
      var down_url = DownloadAddr + '?id=' + record.id + '&role=' + role + '&taxno=' + taxno;
        return (
        <span>
        <a href={ jx_url }>查看绩效</a>
        <span className="ant-divider"></span>
        <a href={sw_url}>查看扣税</a>
        <span className="ant-divider"></span>
        <a href={gz_url}>查看工资详细 </a>
        <span className="ant-divider"></span>
        <a href={down_url} className="ant-dropdown-link">
            下载 <Icon type="down" />
        </a>
      </span>
        ); 
       
    }
}];

const SalaryGridView = React.createClass({
    
    getInitialState() {
        return {
            selectedRowKeys: [],  // 这里配置默认勾选列
            loading: false,
            startTime: '',
            endTime: '',
            keyWord: '',
            data: []
        };
    },
  
    search(){    
      var start_time = this.state.startTime;
      var end_time = this.state.endTime;
      var key_word = this.state.keyWord;  
      var role = window.localStorage.getItem('role');
      var taxno = window.localStorage.getItem('taxno');
      var addr = '';
      if(role == 'admin'){
          addr = SalaryAddr + "?start=" + start_time + "&end=" + end_time + "&keyword=" + key_word;
      }else{
          addr = SalaryAddr + "?start=" + start_time + "&end=" + end_time + "&keyword=" + taxno;
      }   
           
      var _this = this;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', addr, true);  
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
              _this.setState({data:jsonObj.data.items});
              //_this.setState({total:jsonObj.data.total});
          }
      }
      xhr.send();
        //this.setState({'data': []});
    },
    getStartTime(value){
          this.setState({'startTime': value});
          console.log('start time changed: ', value);
    },
    getEndTime(value){
        this.setState({'endTime': value});
    },
    getKeyWord(e){
        this.setState({keyWord: e.target.value});
        //console.log('value is', e.target.value);
    },
    startDel() {

        // 模拟 ajax 请求，完成后清空
        this.setState({ loading: false });
        
        var array = this.state.selectedRowKeys;
        var json = "itemids=" + array.toString();
        console.log(json);
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", SalaryDel, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               var res = xhr.responseText;
               var jsonObj = eval("(" + res + ")");
                _this.setState({data:jsonObj.data.items});
                //_this.setState({total:jsonObj.data.total});
               
            }
          }
        }
        xhr.send(json);
        // 模拟 ajax 请求，完成后清空 
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
      var role = window.localStorage.getItem('role');
      var taxno = window.localStorage.getItem('taxno');
      var addr = '';
      if(role == 'admin'){
          addr = SalaryAddr;
      }else{
          addr = SalaryAddr + '?keyword=' + taxno;
      }   
      var _this = this;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', addr, true);  
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
               _this.setState({data:jsonObj.data.items});
               //_this.setState({total:jsonObj.data.total});
             
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
      const hasSelected = selectedRowKeys.length > 0;
      const pagination = {
          pageSize : 20,
          showSizeChanger: true
          };
       var role = window.localStorage.getItem('role');
       if( role == 'admin' ){
           return (
            <div>
                <div style={{ marginBottom: 16 }}>
                  <span>开始日期：</span>
                  <MonthPicker onChange={this.getStartTime} />
                   <span style={{ marginLeft: 4 }}>结束日期：</span>
                   <MonthPicker onChange={this.getEndTime}  />
                   <span style={{ marginLeft: 4 }}></span>
                  <div>
                  <span>查询条件：</span>
                   <Input  id="SearchInput" placeholder="请输入税号或者姓名" onChange={this.getKeyWord} />
                   </div>
                    <Button type="primary" onClick={this.search}>查询</Button>
                             <span style={{ marginLeft: 8 }}></span>
                    <Button type="primary" onClick={this.startDel}
                            disabled={!hasSelected} loading={loading}>删除</Button>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>       
                  
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pagination} />
            </div>
        );
       }
       else{
          return (
            <div>
                <div >
                  <span>开始日期：</span>
                  <MonthPicker onChange={this.getStartTime} />
                   <span style={{ marginLeft: 4 }}>结束日期：</span>
                   <MonthPicker onChange={this.getEndTime}  />
                   <span style={{ marginLeft: 4 }}></span>                 
                   <Button type="primary" onClick={this.search}>查询</Button>
                </div>                 
                  
                <Table style={{ marginTop: 8 }} rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={pagination} />
            </div>
        );  
       }       
    }
});

export default SalaryGridView;