// Menu.jsx 文件

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

// 这两个是变量声明是 ant 组件需要
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// 左侧菜单模板取自于 ant.design 组件库 用了MENU 的一个组件只在‘选项一’和‘选项二’做了配置路由
const MenuListDom = React.createClass({
  getInitialState() {
    return {
      current: '1',
      openKeys: []
    };
  },
  handleClick(e) {
    window.location.hash = e.key; // 被点击元素的‘key’的值‘about’就是页面跳转的路径
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1)
    });
  },
  onToggle(info) {
    console.log('onToggle', info)
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
  },
  render: function(){
    return (
      <Menu onClick = {this.handleClick}
             style = {{width: 240}}
             openKeys = {this.state.openKeys}
             onOpen = {this.onToggle}
             onClose = {this.onToggle}
             selectedKeys = {[this.state.current]}
             mode = "inline"
        >
        <SubMenu key = "sub4" title = {
                    <span >
                        <Icon type = "appstore" />
                        <span> 工资管理 </span>
                    </span >
                }>
          <Menu.Item key = "/admin/upload" > 工资表导入 </Menu.Item>
          <Menu.Item key = "/admin/salarytable" > 工资查询</Menu.Item>
        </SubMenu>
           <SubMenu key = "sub5" title = {
                    <span >
                        <Icon type = "setting" />
                        <span> 用户管理 </span>
                    </span >
                }>
          <Menu.Item key = "/admin/usertable" > 帐号管理 </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
});

// 定义了要输出的类 MenuList （这个要用于路由配置中）
export default class MenuList extends Component {
  render() {
    return (
      <div>
        <div id="react-menu"> 
        <div className="logo"></div>
           <MenuListDom location={this.props.location} />
        </div>
        <div id="react-content">
        {this.props.children}
        </div>
        <div id="react-top">
            <h1>欢迎使用工资查询系统！</h1>
        </div>
        </div>
    );
  }
};
