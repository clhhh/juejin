import React, { useEffect,Component } from 'react';
import { Link } from 'dva/router';
import { Button,Tabs,List , Typography } from 'antd';
import { connect } from 'dva'; 
import { get } from 'lodash';
import './style/index.css';
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../services/fake-api';
import Listdemo from './component/list/list'
const { TabPane } = Tabs;

const New =(props)=>{
  
  
    return (
      <div className='quan'>
      <div className="app">
        <div className="content">
        <Tabs defaultActiveKey="1"  >
        <TabPane tab="推荐" key="1" >
        <Listdemo type='new' CategorieID='0'>
       
        </Listdemo>
         
        </TabPane>
        <TabPane tab="后端" key="2">
        <Listdemo type='new' CategorieID='1'>

        </Listdemo>
        </TabPane>
        <TabPane tab="前端" key="3">
        <Listdemo type='new' CategorieID='2'>

        </Listdemo>
        </TabPane>
        <TabPane tab="Android" key="4">
        <Listdemo type='new' CategorieID='3'>

        </Listdemo>
        </TabPane>
        <TabPane tab="ios" key="5">
        <Listdemo type='new' CategorieID='4'>

        </Listdemo>
        </TabPane>
        
      </Tabs>
        </div>
        
      <div className="buttonwarp">
      <div className="footerButton">     
        <Button type="primary">
        <Link to={'/'}>热门</Link>
        </Button>
        <Button  type="primary">
        <Link to={'/New'}>最新</Link>
        </Button>
        <Button  type="primary">
        <Link to={'/historyPage'}>历史</Link>
        </Button>
      </div>
      </div>
      </div>
      </div>
    );
  
}
 
export default New;