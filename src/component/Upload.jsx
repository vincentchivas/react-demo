import React from 'react'
import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  showUploadList: false,
  action: 'http://121.197.0.61:81/api/file/upload',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功。`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
};


const UploadView = React.createClass({
	render(){
		
		return (
			<div>
   <a id='gzbyb' href='http://a.zhuanfa88.com:8080/media/data.xlsx'>工资表样本</a>
    <div style={{ marginTop: 25, height: 180 }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
         <p className="ant-upload-text">注意事项:</p>
        <p className="ant-upload-text">1.EXCEL文件由三张表格组成，依次是工资表，绩效表，税务表</p>
        <p className="ant-upload-text">2.三张表格对应的数据条数，行序号要一致，可参考上面的样表</p>
        <p className="ant-upload-text">3.注意工资表的时间字段，须按照样本表的格式，否则导入有误</p>
      </Dragger>
    </div>
  </div>
		);
	}
	
});

export default UploadView; 