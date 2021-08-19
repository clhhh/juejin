import React, { useEffect,Component, useState } from 'react';
import { Link } from 'dva/router';
import { Button,Tabs,List , Typography } from 'antd';
import { connect } from 'dva'; 
import { get } from 'lodash';
import './style/index.css';
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../services/fake-api';
import Listdemo from './component/list/listdemo'
import Commmentdemo from './component/list/commentlist'
import './component/list/list.css'
const { TabPane } = Tabs;
const detail =(props)=>{
    // console.log(props);
    
    
return(
    
    <div className="app">
        <div className='detailHeader'>
        <Link to={'/'}>返回</Link>
           
        </div>
        <div className="content">
        <Listdemo id={props.match.params.id}>

        </Listdemo>
        <Commmentdemo id={props.match.params.id}>

        </Commmentdemo>
        </div>
        
      <div className="buttonwarp">
      <div className="footerButton">     
      
      </div>
      </div>
      </div>
      
)
}
export default detail