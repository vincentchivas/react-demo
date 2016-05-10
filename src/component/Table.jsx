import React from 'react'
import { Table, Icon, Button } from 'antd';

var fetch = require('node-fetch');

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render(text) {
        return <a href="#">{text}</a>;
    }
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
}, {
    title: '操作',
    key: 'operation',
    render(text, record) {
        var href_url = "#/index/detail?name=" + record.name;
        return (
            <span>
        <a href={ href_url }>查看-{record.name}-详细</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
            更多 <Icon type="down" />
        </a>
      </span>
        );
    }
}];

const GridView = React.createClass({
    getInitialState() {
        return {
            selectedRowKeys: [],  // 这里配置默认勾选列
            loading: false,
            data:[]
        };
    },
    start() {
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
                    <Button type="primary" onClick={this.start}
                            disabled={!hasSelected} loading={loading}>操作</Button>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
});

export default GridView;