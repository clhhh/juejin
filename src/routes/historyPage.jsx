import React, { Component, useEffect, useState } from 'react';
import './style/index.css';
import { Link } from 'dva/router';
import { Alert, Button } from 'antd';
import './component/list/list.css'
import Listdemo from './component/list/listhistory'
  const HistoryPage =(props)=>{

  
    function handledelect(){
      localStorage.setItem("list",JSON.stringify([]))
      window.location.reload()
    }
    return (
     
      <div>
         <div className='listoryHeader'>
            <Button onClick={()=>handledelect()}>删除记录</Button>
            {/* <span>历史浏览</span>  */}
            历史浏览
        </div>
        <p className='pull'></p>
        <div className='listdemostyle'>
          <Listdemo/>
        </div>
        
        <div className="buttonwarp">
      <div className="footerButton">     
        <Button type="primary" >
        <Link to={'/'}>热门</Link>
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
    );
  
}
 
export default HistoryPage;
