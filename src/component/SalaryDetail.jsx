import React from 'react'
import { Form } from 'antd';
const FormItem = Form.Item;

var fetch = require('node-fetch');

let Demo = React.createClass({
     getInitialState(){    
       return {
           'id': this.props.id,
           'tmpl': this.props.tmpl,
           'data': []
       }
   },
    
   componentDidMount(){
      var _this = this;
      var url = 'http://localhost:8989/salary/' + _this.state.id;
      fetch(url).then(function(res){
        return res.json();
      }).then(function(json){
        _this.setState({data:json});
      });
    },
    
    render() {  
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        if(this.state.tmpl == 'gz'){
            return (
            <Form horizontal>
             <FormItem
                    {...formItemLayout}
                    label="表名：">
                    <p className="ant-form-text" >工资表</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名：">
                    <p className="ant-form-text">{ this.state.data.姓名 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税号：">
					<p className="ant-form-text">{ this.state.data.税号 }</p>
                </FormItem>
            </Form>
        );
        }
        if(this.state.tmpl == 'jx'){
             return (
            <Form horizontal>
             <FormItem
                    {...formItemLayout}
                    label="表名：">
                    <p className="ant-form-text" >绩效表</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名：">
                    <p className="ant-form-text">{ this.state.data.姓名 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税号：">
					<p className="ant-form-text">{ this.state.data.税号 }</p>
                </FormItem>
            </Form>
        );
        }
        if(this.state.tmpl == 'sw'){
             return (
            <Form horizontal>
             <FormItem
                    {...formItemLayout}
                    label="表名：">
                    <p className="ant-form-text" >税务表</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名：">
                    <p className="ant-form-text">{ this.state.data.姓名 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税号：">
					<p className="ant-form-text">{ this.state.data.税号 }</p>
                </FormItem>
            </Form>
        );
          
        }
    }
});

Demo = Form.create()(Demo);

const SalaryDetail = React.createClass({

   getInitialState(){
       var id = this.props.location.query.id;
        var tmpl = this.props.location.query.tmpl;
       return {
           'id': id,
           'tmpl': tmpl
       }
   },
   
    render(){
        return (<div>
            <Demo id={this.state.id} tmpl={this.state.tmpl}/>
        </div>)
    }
});

export default SalaryDetail;