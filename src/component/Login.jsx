import React from 'react'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


var LoginForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
        var info = this.props.form.getFieldsValue();
        window.location.href = "#/admin?name=" + info.username;
        window.localStorage.setItem('token', 'logined');
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
        label = "用户名："
        help = "默认是姓名全拼" >
        <Input type="text"  {...getFieldProps('username') } />
</FormItem>

 <FormItem
        {...formItemLayout }
    	label = "密码：">
        <Input type="password" {...getFieldProps('pass') } placeholder = "请输入密码" />
</FormItem>
    
< FormItem
    	{...formItemLayout }
        label = "备注："
        help = "随便写点什么" >
        <Input type="textarea" placeholder= "随便写" {...getFieldProps('remark') } />
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
        return (<div id='loginForm'>
            <LoginForm />
            < /div>)
}
});

export default UserLogin;