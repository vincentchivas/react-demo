import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
var config = require('./setting.js');
const UserEdit = config.host + '/api/user/edit/';

let Demo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        //console.log('收到表单值：', this.props.form.getFieldsValue());
        var json = this.props.form.getFieldsValue();
         json = (function(obj){ // 转成post需要的字符串.
          var str = "";
          for(var prop in obj){
            str += prop + "=" + obj[prop] + "&"
          }
          return str;
        })(json);
       
        var url = UserEdit + this.state.id;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {           
               var res = xhr.responseText;
                console.log(res);
               var jsonObj = eval("(" + res + ")");
               console.log(jsonObj);
            }
          }
        }
        xhr.send(json);
        window.location.href = "#/admin/usertable";
    },

    
      getInitialState(){    
       return {
           'id': this.props.id,
           'data': []
       }
   },
        
     componentDidMount(){
      var url = UserEdit + this.state.id;   
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);  
      var _this = this;
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
              console.log('xhr');
              console.log(jsonObj);
              _this.setState({data:jsonObj.data});            
          }
      }
      xhr.send();
    },
    
    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        console.log(1);
        console.log(this.state.data);
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="用户名：">
                    <Input type="text" placeholder={this.state.data.username} {...getFieldProps('username')} />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="初始密码：">
                    <Input type="password"  {...getFieldProps('pass')} placeholder="请输入密码" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="用户角色：">
                    <RadioGroup {...getFieldProps('role', { initialValue: 'teacher' })}>                      
                        <Radio value="teacher">教师</Radio>
                        <Radio value="admin">管理员</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税务号码："
                    help="每个人都是唯一的">
                    <Input type="text"  placeholder={this.state.data.taxno} {...getFieldProps('taxno')} />
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="新人事编号：">
                    <Input type="text" placeholder={this.state.data.personno} {...getFieldProps('personno')} />
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">更新个人信息</Button>
                </FormItem>
            </Form>
        );
    }
});

Demo = Form.create()(Demo);

const UserDetail = React.createClass({
    getInitialState(){
       var id = this.props.location.query.id;
       return {
           'id': id
       }
   },  
    render(){
        return (<div style={{ marginTop: 80 }}>
         <Demo id={this.state.id} />
        </div>)
    }
});

export default UserDetail;