import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const UserPass = 'http://121.197.0.61:81/api/user/password';

let Demo = React.createClass({
    
    handleSubmit(e) {
        var taxno = window.localStorage.getItem('taxno');
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
        console.log(json);
        var taxno = window.localStorage.getItem('taxno');
         console.log(taxno);
        json = json + "taxno=" + taxno;
        console.log(json);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", UserPass, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               var res = xhr.responseText;
               var jsonObj = eval("(" + res + ")");
               console.log(jsonObj);
            }
          }
        }
        xhr.send(json);
    },

    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="原始密码：">
                    <Input type="password" placeholder="请输入原始密码" {...getFieldProps('oldpass')} />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="新密码：">
                    <Input type="password" {...getFieldProps('newpass')} placeholder="请输入密码" />
                </FormItem>
				<FormItem
                    {...formItemLayout}
                    label="确认新密码：">
                    <Input type="password" {...getFieldProps('confirmpass')} placeholder="请再次输入" />
                </FormItem>
                
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
});

Demo = Form.create()(Demo);

const PassChanged = React.createClass({
    render(){
        return (<div style={{ marginTop: 100 }}>
         <Demo />
        </div>)
    }
});

export default PassChanged;