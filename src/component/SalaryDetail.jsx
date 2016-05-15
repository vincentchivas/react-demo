import React from 'react'
import { Form } from 'antd';
const FormItem = Form.Item;

const salaryAddr = 'http://121.197.0.61:81/api/salary/detail';

let Demo = React.createClass({
     getInitialState(){    
       return {
           'id': this.props.id,
           'tmpl': this.props.tmpl,
           'data': []
       }
   },
    
   componentDidMount(){
         
      var xhr = new XMLHttpRequest();
      var role = window.localStorage.getItem('role');
      var url = salaryAddr + '?id=' + this.state.id + '&tmpl=' + this.state.tmpl + '&role=' + role;
      var _this = this;
      xhr.open('GET', url, true);  
      xhr.onreadystatechange = function(){
          if( xhr.readyState == 4 && xhr.status == 200 )
          {
              var res = xhr.responseText;
              var jsonObj = eval("(" + res + ")");
              _this.setState({data:jsonObj.data});            
          }
      }
      xhr.send();
    },
    
    render() {  
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        if(this.state.tmpl == 'gzb'){
            return (
            <Form horizontal>
             <FormItem
                    {...formItemLayout}
                    label="表名：">
                    <p className="ant-form-text" >工资表</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="新人事编号：">
                    <p className="ant-form-text">{ this.state.data.新人事编号 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税务号码：">
					<p className="ant-form-text">{ this.state.data.税务号码 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="姓名：">
					<p className="ant-form-text">{ this.state.data.姓名 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="帐号：">
					<p className="ant-form-text">{ this.state.data.帐号 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="时间：">
					<p className="ant-form-text">{ this.state.data.时间 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="岗位工资：">
					<p className="ant-form-text">{ this.state.data.岗位工资 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="薪级工资：">
					<p className="ant-form-text">{ this.state.data.薪级工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="附加：">
					<p className="ant-form-text">{ this.state.data.附加 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="保留工资：">
					<p className="ant-form-text">{ this.state.data.保留工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="交通费：">
					<p className="ant-form-text">{ this.state.data.交通费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="女工卫生费：">
					<p className="ant-form-text">{ this.state.data.女工卫生费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="政府特贴：">
					<p className="ant-form-text">{ this.state.data.政府特贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教护补助：">
					<p className="ant-form-text">{ this.state.data.教护补助 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="住房补贴：">
					<p className="ant-form-text">{ this.state.data.住房补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="独子补贴：">
					<p className="ant-form-text">{ this.state.data.独子补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="奖励性绩效：">
					<p className="ant-form-text">{ this.state.data.奖励性绩效 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="电话补贴：">
					<p className="ant-form-text">{ this.state.data.电话补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教学津贴：">
					<p className="ant-form-text">{ this.state.data.教学津贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="物业费：">
					<p className="ant-form-text">{ this.state.data.物业费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="基本工资增资：">
					<p className="ant-form-text">{ this.state.data.基本工资增资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="考核优秀奖：">
					<p className="ant-form-text">{ this.state.data.考核优秀奖 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="补发工资：">
					<p className="ant-form-text">{ this.state.data.补发工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="应发数：">
					<p className="ant-form-text">{ this.state.data.应发数 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="公积金：">
					<p className="ant-form-text">{ this.state.data.公积金 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="房租：">
					<p className="ant-form-text">{ this.state.data.房租 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="养老保险：">
					<p className="ant-form-text">{ this.state.data.养老保险 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="失业保险：">
					<p className="ant-form-text">{ this.state.data.失业保险 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="代扣所得税：">
					<p className="ant-form-text">{ this.state.data.代扣所得税 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="补扣税金：">
					<p className="ant-form-text">{ this.state.data.补扣税金 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="水电费：">
					<p className="ant-form-text">{ this.state.data.水电费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="应扣数：">
					<p className="ant-form-text">{ this.state.data.应扣数 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="实发数：">
					<p className="ant-form-text">{ this.state.data.实发数 }</p>
                </FormItem>
            </Form>
        );
        }
        if(this.state.tmpl == 'jxb'){
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
                    label="帐号：">
					<p className="ant-form-text">{ this.state.data.帐号 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="时间：">
					<p className="ant-form-text">{ this.state.data.时间 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="年功绩效：">
					<p className="ant-form-text">{ this.state.data.年功绩效 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="考勤绩效：">
					<p className="ant-form-text">{ this.state.data.考勤绩效 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="基础性绩效：">
					<p className="ant-form-text">{ this.state.data.基础性绩效 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="岗位职责奖：">
					<p className="ant-form-text">{ this.state.data.岗位职责奖 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="班主任费：">
					<p className="ant-form-text">{ this.state.data.班主任费 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="副班主任：">
					<p className="ant-form-text">{ this.state.data.副班主任 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="安全奖：">
					<p className="ant-form-text">{ this.state.data.安全奖 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="岗位津贴：">
					<p className="ant-form-text">{ this.state.data.岗位津贴 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="工作量津贴：">
					<p className="ant-form-text">{ this.state.data.工作量津贴 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="补午休值费：">
					<p className="ant-form-text">{ this.state.data.补午休值费 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="值勤：">
					<p className="ant-form-text">{ this.state.data.值勤 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="代课费：">
					<p className="ant-form-text">{ this.state.data.代课费 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="午休值班费：">
					<p className="ant-form-text">{ this.state.data.午休值班费 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="文明办公室：">
					<p className="ant-form-text">{ this.state.data.文明办公室 }</p>
                </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="奖励金1：">
					<p className="ant-form-text">{ this.state.data.奖励金1 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="奖励金2：">
					<p className="ant-form-text">{ this.state.data.奖励金2 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="其他：">
					<p className="ant-form-text">{ this.state.data.其他 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="共计1：">
					<p className="ant-form-text">{ this.state.data.共计1 }</p>
                </FormItem>
            </Form>
        );
        }
        if(this.state.tmpl == 'swb'){
             return (
            <Form horizontal>
             <FormItem
                    {...formItemLayout}
                    label="表名：">
                    <p className="ant-form-text" >税务表</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="新人事编号：">
                    <p className="ant-form-text">{ this.state.data.新人事编号 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="税务号码：">
					<p className="ant-form-text">{ this.state.data.税务号码 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="姓名：">
					<p className="ant-form-text">{ this.state.data.姓名 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="帐号：">
					<p className="ant-form-text">{ this.state.data.帐号 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="时间：">
					<p className="ant-form-text">{ this.state.data.时间 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="岗位工资：">
					<p className="ant-form-text">{ this.state.data.岗位工资 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="薪级工资：">
					<p className="ant-form-text">{ this.state.data.薪级工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="附加：">
					<p className="ant-form-text">{ this.state.data.附加 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="保留工资：">
					<p className="ant-form-text">{ this.state.data.保留工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="交通费：">
					<p className="ant-form-text">{ this.state.data.交通费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="女工卫生费：">
					<p className="ant-form-text">{ this.state.data.女工卫生费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="政府特贴：">
					<p className="ant-form-text">{ this.state.data.政府特贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教护补助：">
					<p className="ant-form-text">{ this.state.data.教护补助 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="住房补贴：">
					<p className="ant-form-text">{ this.state.data.住房补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="独子补贴：">
					<p className="ant-form-text">{ this.state.data.独子补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="奖励性绩效：">
					<p className="ant-form-text">{ this.state.data.奖励性绩效 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="电话补贴：">
					<p className="ant-form-text">{ this.state.data.电话补贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教学津贴：">
					<p className="ant-form-text">{ this.state.data.教学津贴 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="物业费：">
					<p className="ant-form-text">{ this.state.data.物业费 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="基本工资增资：">
					<p className="ant-form-text">{ this.state.data.基本工资增资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="考核优秀奖：">
					<p className="ant-form-text">{ this.state.data.考核优秀奖 }</p>
                </FormItem>
                 <FormItem
                    {...formItemLayout}
                    label="补发工资：">
					<p className="ant-form-text">{ this.state.data.补发工资 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="收入总额：">
					<p className="ant-form-text">{ this.state.data.收入总额 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="标准扣除额：">
					<p className="ant-form-text">{ this.state.data.标准扣除额 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="公积金：">
					<p className="ant-form-text">{ this.state.data.公积金 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="养老保险：">
					<p className="ant-form-text">{ this.state.data.养老保险 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="失业保险：">
					<p className="ant-form-text">{ this.state.data.失业保险 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="扣除总额：">
					<p className="ant-form-text">{ this.state.data.扣除总额 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="应纳税所得额：">
					<p className="ant-form-text">{ this.state.data.应纳税所得额 }</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="应交缴税款：">
					<p className="ant-form-text">{ this.state.data.应交缴税款 }</p>
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