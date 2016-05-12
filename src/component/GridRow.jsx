import React from 'react'
//import getRouteParams from 'react-router'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

var fetch = require('node-fetch');

let Demo = React.createClass({
     getInitialState(){    
     console.log('xxxname', this.props.name);
       return {
           'name': this.props.name,
           'data': []
       }
   },
    
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    },
   
   componentDidMount(){
      var _this = this;
      var url = 'http://localhost:8989/users/' + _this.state.name;
      fetch(url).then(function(res){
        return res.json();
      }).then(function(json){
        _this.setState({data:json});
      });
    },
    
    render() {
        console.log('user info', this.state.data);
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="用户名：">
                    <p className="ant-form-text" id="userName" name="userName">{ this.state.data.name }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码：">
                    <Input type="password" {...getFieldProps('pass')} placeholder="请输入密码" />
                </FormItem>
                
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
});

Demo = Form.create()(Demo);

const GridRow = React.createClass({

   getInitialState(){
       var name = this.props.location.query.name;
       return {
           'name': name
       }
   },
   /*
   componentDidMount(){
       var query = this.props.location.query;
        console.log('query', query);
   },
    
   */
    render(){
        return (<div>
            <Demo name={this.state.name} />
        </div>)
    }
});

export default GridRow;