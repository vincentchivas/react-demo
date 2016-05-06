/*
import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<App />, document.getElementById('react-content'));
*/
// index.jsx 文件
import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import MenuList from '../component/Menu';
import '../component/App.less';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

// 这里是需要显示的内容模板 About 和 Users
import About from '../component/About';
import User from '../component/User';
import GridView from '../component/Table';
import GridRow from '../component/GridRow';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={MenuList}>
            <IndexRoute component={About} />
            <Route path="about" component={About} />
            <Route path="users" component={User} />
            <Route path="table" component={GridView} />
            <Route path="detail" component={GridRow} />
        </Route>
    </Router>
), document.getElementById("content"));