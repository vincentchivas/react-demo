import React from 'react'
import { Table } from 'antd';
const salaryAddr = 'http://121.197.0.61:81/api/salary/detail';

const SalaryDetailView = React.createClass({
  getInitialState(){
       var id = this.props.location.query.id;
       var tmpl = this.props.location.query.tmpl;
       return {
           'id': id,
           'tmpl': tmpl,
           'cols1':[],
            'cols2':[],
           'items': []
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
              console.log(jsonObj);
              _this.setState({cols1:jsonObj.data.cols1});  
               _this.setState({cols2:jsonObj.data.cols2});  
              _this.setState({items:jsonObj.data.items});         
          }
      }
      xhr.send();
    },  
   
  render(){  
    var cols1 = this.state.cols1;
    var cols2 = this.state.cols2;
    var items = this.state.items;
    return(
        <div>
       <Table  columns={cols1} dataSource={items} pagination={false} style={{ marginTop: 30 }}/>
       <hr/>
        <Table  columns={cols2} dataSource={items} pagination={false} style={{ marginTop: 30 }}/>
      </div>
    );
   
  }
  
});
export default SalaryDetailView;
