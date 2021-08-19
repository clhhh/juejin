import React, { useEffect,Component, useState } from 'react';
import { Link } from 'dva/router';
import { Button,Tabs,List , Typography } from 'antd';
import { connect } from 'dva'; 
import { get } from 'lodash';
import './style/index.css';
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../services/fake-api';
import Listdemo from './component/list/list'
const { TabPane } = Tabs;

const AAA =(props)=>{

console.log('AAA.props',props);
// const [historyList,sethistoryList] =useState([])
let historyList=[]
function getMes(data){
  console.log("接收到子组件的详情",data);
  historyList.push(data)
  console.log('historyList',historyList);
  // props.historygetMes(historyList)
}

  
    return (
      <div className='wai'>
      <div className="quan">
      <div className="app">
        <div className="content">
        <Tabs defaultActiveKey="1"  >
        <TabPane tab="推荐" key="1" >
        <Listdemo type='hot' CategorieID='0' getMes={getMes}>
       
        </Listdemo>
         
        </TabPane>
        <TabPane tab="后端" key="2">
        <Listdemo type='hot' CategorieID='1' getMes={getMes}>

        </Listdemo>
        </TabPane>
        <TabPane tab="前端" key="3">
        <Listdemo type='hot' CategorieID='2' getMes={getMes}>

        </Listdemo>
        </TabPane>
        <TabPane tab="Android" key="4">
        <Listdemo type='new' CategorieID='3' getMes={getMes}>

        </Listdemo>
        </TabPane>
        <TabPane tab="ios" key="5">
        <Listdemo type='new' CategorieID='4' getMes={getMes}>

        </Listdemo>
        </TabPane>
      </Tabs>
        </div>
        
      <div className="buttonwarp">
      <div className="footerButton">     
        <Button type="primary" color="#0000FF" >
        <Link to={'/'} >热门</Link>
        </Button>
        <Button  type="primary">
        <Link to={'/New'}>最新</Link>
        </Button>
        <Button  type="primary" >
        <Link to={'/historyPage'}>历史</Link>
        </Button>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  
}
export default  connect(({
  ArticleListBack,
}) => ({
  articleList: get(ArticleListBack, ' articleList', []),
  CategoriesList: get(ArticleListBack, ' CategoriesList', [])
}))(AAA); 
