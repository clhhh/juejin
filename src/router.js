import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
 
const menuGlobal=[
  {
      id:'aaa',
      pid:'0',
      name:'aaa页',
      icon:'user',
      path: '/',
      models: () => [import('./models/aaa')], //models可多个
      component: () => import('./routes/AAA'),
  }, 
  {
      id:'bbb',
      pid:'0',
      name:'热门页',
      icon:'user',
      path: '/New',
      component: () => import('./routes/New'),
  }, 
  {
      id:'ccc',
      pid:'0',
      name:'ccc页',
      icon:'user',
      path: '/historyPage',
      models: () => [import('./models/ccc')], //models可多个
      component: () => import('./routes/historyPage'),
  }, 
  {
    id:'content',
    pid:'0',
    name:'详情页',
    icon:'user',
    path: "/content/:id?",
    component: () => import('./routes/detail'),
}, 
];
 
function RouterConfig({ history, app }) {
 
  return (
    <Router history={history}>
      <Switch>
        {
          menuGlobal.map(({path,...dynamics},index)=>(
            <Route
              key={index} 
              path={path} 
              exact 
              component={dynamic({
                app,
                ...dynamics
              })} 
            />
          ))
        }
      </Switch>
    </Router>
  );
}
 
export default RouterConfig;
