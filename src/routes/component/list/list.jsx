import React, { useState,useEffect } from 'react';
import './list.css'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';
import { Link } from 'dva/router';

const Listdemo = props => {
   
    // const [loading, setloading] = useState(false); 
    const [arrList, setarrList] = useState([]); 
    const [offset, setoffset] = useState(0);
    // const [articleid,setarticleid]=useState(0)

   
    
    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler,false);
        return()=> window.removeEventListener("scroll",scrollHandler,false);
    })
    
    
    useEffect(()=>{
        (async() => {
           let p=( await getArticles( parseInt(props.CategorieID),props.type,  0,  10));   
           setarrList( p.data.articles.map(
                    (item)=>{
                    return (
                        item
                    )
                     })) 
                                            
        })();
      },[]) 
      useEffect(()=>{
          (async() => {
            let k=await getCommentsByArticleId( "6981673766178783262",  0,  10)
           
                console.log('评论',k);
                                         
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
      
       
     
    
    // useEffect(()=>{      
    //     console.log(hotarticalList.data);
    //     setarrList( hotarticalList.data.articles.map(
    //         (item)=>{
    //         return (
    //             item
    //         )
    //          }))           
    //   },[hotarticalList])

    // let callMes= hotarticalList =>  {
    //     console.log(hotarticalList);
    //     hotarticalList.data.articles.map(
    //         (item)=>{ return item}
    //     )
    // }
    // if(Object.keys(hotarticalList).length>0){
    //     console.log('hot获取成功',hotarticalList);
    //     setarrList( callMes(hotarticalList)  )
    // }

    // if(Object.keys(hotarticalList).length>0){
    //     console.log('hot获取成功',hotarticalList);
    //     arrList=hotarticalList.data.articles.map(
    //         (item)=>
    //         { return (item)}
    //     )   
    // }
   let loading=false
      
    function load(){
        if(loading)return;
        loading=true   
        //索引+10获取下10条
        setoffset(offset+10)
        console.log(offset);
        (async() => {
            let a=await getArticles(parseInt(props.CategorieID),props.type,  offset,  10)   
            setarrList(arrList.concat(a.data.articles.map(
                (item)=>{
               return (
                 item
               )
             })))         
            console.log('length',arrList.length); 
            loading=false 
            console.log('触发');         
        })()
    }

    let storage=[]
    // const [storage,setstorage]=useState([])

    //成功！！
    function handleclick(articleItem){
        if(localStorage.getItem('list')!==null){
            storage=JSON.parse(localStorage.getItem('list'))
        }
        storage= storage.filter((item)=>item.article_id!=articleItem.article_id)
        storage.unshift(articleItem)
        localStorage.setItem('list',JSON.stringify(storage)) 
   
    
    }
    //成功


    // 用数组存对象
    // function handleclick(id){
    // if(localStorage.getItem('list')!==null){
    //     storage=JSON.parse(localStorage.getItem('list'))
    //     }
    //     (async() => {
    //         storage.push(await getArticleById(id))                         
    //     })();
 
    // localStorage.setItem('list',JSON.stringify(storage)) 

    // }
    // function handleclick(id){
    //     if(localStorage.getItem('list')){
    //         setstorage(localStorage.getItem('list'))
    //     }
        
    //     (async() => {
    //         setstorage(storage.concat(await getArticleById(id)))  
                   
    //     })();

    //     localStorage.setItem('list',JSON.stringify(storage)) 
         
    //     // console.log('storage',storage); 
    //     }
   
    return(
      
        arrList.map(
            (item)=>{
           return (
            <div className='content' > 
            <Link to={`/content/${item.article_id}`} onClick={()=>handleclick(item)} >
             
            <div className='item' >           
               <h3>    
               { item.article_info.title }
               </h3>
               <div className="itemContent">
               <p>
               { item.article_info.brief_content }
               </p>
               <img src={item.article_info.cover_image} ></img>           
               </div>
           </div>
           
           </Link>
          
           </div>
           
          
           )
         })  
        // :<div>到底了</div>

         
    )

}
export default Listdemo;