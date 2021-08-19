import React, { useState,useEffect } from 'react';
import './list.css'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';
import { Link } from 'dva/router';
const Comment = props => {
   
  
    const [arrList, setarrList] = useState([]); 
    const [offset, setoffset] = useState(0);

    // useEffect(()=>{
    //     window.addEventListener("scroll",scrollHandler,false);
    //     return()=> window.removeEventListener("scroll",scrollHandler,false);
    // })
    
    useEffect(()=>{
        (async() => {
           let p=( await getCommentsByArticleId( parseInt(props.id),  0,  10));   
           setarrList( p.data.comments.map(
                    (item)=>{
                    return (
                        item
                    )
                     })) 
                                            
        })();
      },[]) 

   
    //   console.log(arrList);  
      function scrollHandler(){
          const scrollHeight=document.body.scrollHeight
          const scrollTop=document.body.scrollTop||document.documentElement.scrollTop
          const clientHeight=document.documentElement.clientHeight

          const distance=scrollHeight-scrollTop-clientHeight
          
          if(distance<200){
                  load()    
          }
      }
      
       
     
  
   let loading=false
      
    function load(){
        if(loading)return;
        loading=true   
        //索引+10获取下10条
        setoffset(offset+10)
        console.log(offset);
        (async() => {
            let a=await getArticles(getCommentsByArticleId( parseInt(props.id),  0,  10)  )
            setarrList(arrList.concat(a.data.comments.map(
                (item)=>{
               return (
                 item
               )
             })))         
            console.log('length',arrList.length); 
            loading=false 
            console.log('加载评论触发');         
        })()
    }


    return(
        arrList.map(
            (item)=>{
           return (
            <div className='content' > 
  
             
            <div className='item' >           
              
              <div className="commentItem">               
                <img src={item.user_info.avatar_large}></img>  
                <p className='username'>
                {item.user_info.user_name}
                </p>
                <p className= 'comment_content'>
                {item.comment_info.comment_content}     
                </p>        
               </div>
           </div>

           </div>
          
           )
         })  
        // :<div>到底了</div>

        
    )

}
export default Comment;