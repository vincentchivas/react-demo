import React from 'react'
import { Upload, Icon, message } from 'antd';
var config = require('./setting.js');
const Dragger = Upload.Dragger;
const uploadAddr = config.host + '/api/file/upload';
const formatFile = config.host + '/media/2016年5月工资.xlsx'
const props = {
  name: 'file',
  showUploadList: false,
  action: uploadAddr,
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info.file.response);
      var msg = info.file.response.msg;
      var status = info.file.response.status;
      if(status == 0){
         message.success(`${info.file.name} 上传成功。`);
      }else{
         message.error(`${msg}, 上传失败。`);
      }
     
    } else if (info.file.status === 'error') {
      var msg = info.file.response.msg;
      message.error(`${msg}, ${info.file.name} 上传失败。`);
    }
  },
};


const UploadView = React.createClass({

  componentDidMount(){
      var is_login = window.localStorage.getItem('token');
      if (is_login == null){
          window.location.href = "#/login"
      }
     },
     
	render(){		
		return (
			<div>
   <a id='gzbyb' href={ formatFile }>请下载参考工资表样表</a>
    <div style={{ marginTop: 25, height: 300 }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
         <p className="ant-upload-text">注意事项:</p>
        <p className="ant-upload-text">1.EXCEL由三张表格组成，依次是1工资表，2绩效表，3税务表</p>
        <p className="ant-upload-text">2.三张表格对应的数据条数，行序号要一致，可参考上面的样表</p>
        <p className="ant-upload-text">3.注意工资表的时间字段，须按照样本表的格式，否则导入有误</p>
        <p className="ant-upload-text">4.目前导入是按照月份导入，如果导入相同月份数据做更新操作</p>
      </Dragger>
    </div>
  </div>
		);
	}
	
});

export default UploadView; 