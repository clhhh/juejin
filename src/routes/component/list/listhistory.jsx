import React, { useState,useEffect } from 'react';
import './list.css'
import { Link } from 'dva/router';
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';
const Listdemo = props => {
  const [list,setlist]=useState([])

    useEffect(()=>{
      setlist(JSON.parse(localStorage.getItem("list")) )
    },[])
    console.log("list",list); //一直打印
    
    // const [arrUniqur,setarrUniqur]=useState([])
    // setTimeout(() => {
    //   for(let i=0;i<list.length;i++){
    //     if(arrUniqur.some((item)=>item.article_id!=list[i].article_id)){
    //       arrUniqur.push(list[i])
    //     }
    // }
    // console.log("arrUniqur",arrUniqur);
    // }, 0);
    
    
    
    return(
      
      list?list.map(
        (item)=>{
       return (
        <div className='content'> 
        <Link to={`/content/${item.article_id}`}  >
         
        <div className='item' >           
           <h3>    
           { item.article_info.title }
           </h3>
           <div className="itemContent">
           <p>
           { item.article_info.brief_content }
           </p>
           <img src={item.article_info.cover_image}></img>           
           </div>
       </div>
       </Link>
       </div>
      
      
       )
      
     }) 
     :<div>
       还没有浏览文章哦 快去看！
     </div>
         
        
      
    )

}
export default Listdemo;