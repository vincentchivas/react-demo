import React from 'react'
import { Upload, Icon } from 'antd';

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  showUploadList: false,
  action: 'http://www.zhuanfa88.com:8080/ts/api/file/upload',
};
/*
 <div style={{ width: 246, height: 140 }}>
       <Dragger {...props}>
        <Icon type="plus" />
      </Dragger>
    </div>
    */
const UploadView = React.createClass({
	render(){
		
		return (
			<div>
   
    <div style={{ marginTop: 16, height: 180 }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
        <p className="ant-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
      </Dragger>
    </div>
  </div>
		);
	}
	
});

export default UploadView; 