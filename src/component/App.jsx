import React from 'react';
import { DatePicker, message } from 'antd';
import { Button } from 'antd'

const App = React.createClass({
  getInitialState() {
  return {
    date: ''
  };
},
handleChange(value) {
  message.info('the date you pick is: ' + value.toString());
  this.setState({
    date: value
  });
},
render() {
  return <div style={{width: 400, margin: '100px auto'}}>
<DatePicker onChange={this.handleChange} />
<div style={{marginTop: 20}}>now date is {this.state.date.toString()}</div>
    <div> <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button type="ghost">幽灵按钮</Button>
      <Button type="dashed">虚线按钮</Button></div>
</div>;
}
});

export default App;
