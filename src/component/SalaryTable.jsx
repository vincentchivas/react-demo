import React from 'react'
import { Table, Icon, Button, DatePicker, Input } from 'antd';

var fetch = require('node-fetch');

const MonthPicker = DatePicker.MonthPicker;
const columns = [
    {
    title: '序号',
    dataIndex: 'id',
    key: 'id'
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
    title: '帐号',
    dataIndex: '帐号',
    key: '帐号'
}, {
    title: '新人事编号',
    dataIndex: '新人事编号',
    key: '新人事编号'
}, {
    title: '操作',
    key: 'operation',
    render(text, record) {
      var gz_url = "#/admin/gzdetail?id=" + record.id + "&tmpl=gz";
      var jx_url = "#/admin/jxdetail?id=" + record.id + "&tmpl=jx";
      var sw_url = "#/admin/swdetail?id=" + record.id + "&tmpl=sw";
        return (
        <span>
        <a href={ jx_url }>查看绩效</a>
        <span className="ant-divider"></span>
        <a href={sw_url}>查看扣税</a>
        <span className="ant-divider"></span>
        <a href={gz_url} className="ant-dropdown-link">
            查看工资详细 <Icon type="right" />
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
            data: []
        };
    },
    search(){
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
        //this.setState({name: e.target.value});
        console.log('value is', e.target.value);
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
      fetch('http://www.zhuanfa88.com:8080/ts/api/salary/list').then(function(res){
        return res.json();
      }).then(function(json){
        _this.setState({data:json.data});
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
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
});

export default SalaryGridView;