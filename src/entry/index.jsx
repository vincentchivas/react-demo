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
import User from '../component/User';
import UserLogin from '../component/Login';
import UploadView from '../component/Upload';
import UserGridView from '../component/UserTable';
import UserDetail from '../component/UserDetail';
import SalaryGridView from '../component/SalaryTable';
import SalaryDetailView from '../component/SalaryDetailTable';

import PassChanged from '../component/PassWord'

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={UserLogin}>
          <Route path="login" component={UserLogin} />
    </Route>
        <Route path="/admin" component={MenuList}>
            <IndexRoute component={SalaryGridView} />
            <Route path="upload" component={UploadView} />                    
             <Route path="usertable" component={UserGridView} />         
             <Route path="userdetail" component={UserDetail} />
             <Route path="useradd" component={User} />
             <Route path="salarytable" component={SalaryGridView} />
             <Route path="gzdetail" component={SalaryDetailView} />
             <Route path="jxdetail" component={SalaryDetailView} />
             <Route path="swdetail" component={SalaryDetailView} />
        </Route>
         <Route path="/teacher" component={MenuList}>
            <IndexRoute component={SalaryGridView} />
             <Route path="salarytable" component={SalaryGridView} />
             <Route path="gzdetail" component={SalaryDetailView} />
             <Route path="jxdetail" component={SalaryDetailView} />
             <Route path="swdetail" component={SalaryDetailView} />
             <Route path="password" component={PassChanged} />
        </Route>
    </Router>
), document.getElementById("content"));