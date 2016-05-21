import React from 'react'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
var config = require('./setting.js');

const LoginAddr = config.host + '/api/user/login';

var LoginForm = React.createClass({
  
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    
        var json = this.props.form.getFieldsValue();
        var taxno = json['taxno']
        console.log(taxno);
        console.log(json);
        json = (function(obj){ // 转成post需要的字符串.
          var str = "";
          for(var prop in obj){
            str += prop + "=" + obj[prop] + "&"
          }
          return str;
        })(json);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", LoginAddr, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               var res = xhr.responseText;
               console.log(res);
               var jsonObj = eval("(" + res + ")");
               console.log(jsonObj);
               var status = jsonObj['status']
               if(status ==0){
                 var role = jsonObj['data'];
                  //success
                 window.localStorage.setItem('token', 'logined');
                 window.localStorage.setItem('role', jsonObj.data);
                 window.localStorage.setItem('taxno', taxno);
                 window.location.href = "#/"+ role;
               }else{
                 console.log(jsonObj.msg);
                 window.location.href = "#/login";
               }
              
            }else{
              window.location.href = "#/login";
            }
          }
        }
        xhr.send(json);
       /*
        window.localStorage.setItem('token', 'logined');
                 window.localStorage.setItem('role', 'admin');
                 window.localStorage.setItem('taxno', 'fx000');
                 window.location.href = "#/admin";
         */  
       
    },
 componentDidMount(){
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('role');
      window.localStorage.removeItem('taxno');
 },
      
    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form horizontal onSubmit= { this.handleSubmit } >

 <FormItem
        {...formItemLayout}
        label = "税务号码："
        help = "格式为fx000" >
        <Input type="text"  {...getFieldProps('taxno') } />
</FormItem>

 <FormItem
        {...formItemLayout }
    	label = "密码：">
        <Input type="password" {...getFieldProps('pass') } placeholder = "请输入密码" />
</FormItem>

  <FormItem wrapperCol= {{ span: 16, offset: 6 }} style = {{ marginTop: 24 }}>
        <Button type="primary" htmlType= "submit" > 确定 </Button>
  </FormItem>
</Form>
);
}
});

var LoginForm = Form.create()(LoginForm);

const UserLogin = React.createClass({
    render() {
        return (
            <div id='loginMain'>
              <p id='loginTitle'>华中科技大学附属小学工资查询系统</p>
            <div id='loginForm'>
            <LoginForm />
            </div>
            </div>)
}
});

export default UserLogin;