import React, { useState,useEffect } from 'react';
import './list.css'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';

const HistoryList = props => {
console.log('历史组件props',props);
const [list,setlist]=useState([])
useEffect(()=>{
    setlist(JSON.parse(localStorage.getItem("list")) )
  },[])
 

  console.log("历史组件",list);
    return(
        
     <div>

     </div>

    )

}
export default HistoryList;