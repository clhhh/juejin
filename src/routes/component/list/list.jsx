import React, { useState,useEffect } from 'react';
import './list.css'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';
import { Link } from 'dva/router';

const Listdemo = props => {
   
    // const [loading, setloading] = useState(false); 
    const [arrList, setarrList] = useState([]); 
    const [offset, setoffset] = useState(0);
    const[windowstate,setwindowstate]=useState(false);
 
    useEffect(()=>{    
        window.addEventListener("load",setwindowstate(true));   
    })
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
        windowstate?(
        arrList.map(
            (item)=>{
           return (
            <div className='content' > 
            <div className='hover'>
            <Link to={`/content/${item.article_id}`} onClick={()=>handleclick(item)} >
             
            <div className='item' >           
               <h3>    
               { item.article_info.title }
               </h3>
               <div className="itemContent">
               <p>
               { item.article_info.brief_content }
               </p>
               <img src={item.article_info.cover_image}  ></img>           
               </div>
               <div className='svg'>
               <svg t="1629444042289" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4051" width="16" height="16"><path d="M512 832c-197.333333 0-368.426667-132.906667-425.173333-330.453333a42.666667 42.666667 0 0 1 0-21.333334C143.573333 282.24 314.666667 149.333333 512 149.333333s368.426667 132.906667 425.173333 330.453334a42.666667 42.666667 0 0 1 0 21.333333C880.426667 699.093333 709.333333 832 512 832zM139.946667 490.666667a3.626667 3.626667 0 0 0 0 2.133333A390.826667 390.826667 0 0 0 512 779.093333a390.826667 390.826667 0 0 0 372.053333-287.36 3.626667 3.626667 0 0 0 0-2.133333A390.826667 390.826667 0 0 0 512 202.24 390.826667 390.826667 0 0 0 139.946667 490.666667z" p-id="4052" fill="#bfbfbf"></path><path d="M512 650.666667a160 160 0 1 1 160-160 160 160 0 0 1-160 160z m0-256a96 96 0 1 0 96 96 96.213333 96.213333 0 0 0-96-96z" p-id="4053" fill="#bfbfbf"></path></svg>
               {item.article_info.hot_index} 
               <svg t="1629444603058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7227" width="16" height="16"><path d="M968.3 530.7c0-7.9-2.3-15.4-6.2-21.6-92.5-154.6-261.6-258.2-454.9-258.2-192.4 0-360.8 102.6-453.6 256l0.5 0.3c-4.7 6.6-7.4 14.7-7.4 23.5 0 7.5 2 14.6 5.6 20.7l-0.3 0.2c92.4 154.9 261.7 258.7 455.2 258.7 192.4 0 360.8-102.5 453.5-255.9 4.8-6.7 7.6-14.9 7.6-23.7z" fill="#ffffff" p-id="7228"></path><path d="M645.5 568.3c0-22.6-18.3-40.9-40.9-40.9-17.7 0-32.8 11.3-38.5 27h-0.1c-9.3 24.1-32.7 41.2-60.1 41.2-35.6 0-64.5-28.9-64.5-64.5s28.9-64.5 64.5-64.5c12.3 0 23.8 3.5 33.6 9.5 6.9 5.3 15.6 8.5 25 8.5 22.6 0 40.9-18.3 40.9-40.9 0-16-9.2-29.9-22.6-36.6-22.3-13.9-48.7-21.9-76.9-21.9-80.6 0-145.9 65.3-145.9 145.9 0 80.6 65.3 145.9 145.9 145.9 59.5 0 110.6-35.6 133.4-86.6l-0.2-0.1c4-6.3 6.4-13.9 6.4-22z" fill="#ffffff" p-id="7229"></path></svg>
               <svg t="1629443688596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2716" width="16" height="16"><path d="M936.448 423.424c-16.384-23.552-48.128-35.328-99.84-35.328-28.672 0-59.392 3.072-88.576 6.144-20.48 2.048-39.936 4.096-53.248 4.096-10.752 0-19.968-0.512-28.16-2.048l-8.704-1.536 3.584-7.68c44.544-97.792 23.04-185.344 13.312-227.84l-0.512-1.536c-0.512-3.072-1.536-5.632-2.048-9.216-9.216-42.496-50.688-65.024-87.04-65.024-4.096 0-8.704 0.512-12.8 1.024-34.304 5.12-67.072 33.28-62.976 84.992 11.264 135.168-110.592 210.944-160.768 236.544-11.264-10.752-26.624-16.896-43.52-16.896H211.968c-35.328 0-64 28.672-64 64v383.488c0 35.328 28.672 64 64 64h93.696c16.384 0 31.232-6.144 42.496-16.384v0.512c38.4 0.512 101.888 5.12 158.72 10.24 54.272 4.096 105.984 8.704 133.12 8.704 57.856 0 129.536 0 185.344-36.352 49.664-32.768 63.488-120.832 75.264-199.168v-1.024c2.56-16.384 4.608-31.744 7.168-44.544 4.096-20.992 12.8-43.52 20.48-64.512 16.896-45.568 35.84-94.72 8.192-134.656zM309.76 832.512c0 4.096-3.584 7.68-7.68 7.68H215.552c-4.096 0-7.68-3.584-7.68-7.68V456.704c0-4.096 3.584-7.68 7.68-7.68h86.016c4.096 0 7.68 3.584 7.68 7.68v375.808z m558.592-299.52c-8.704 22.528-18.432 48.64-23.552 75.264-2.56 14.336-5.12 30.72-7.68 48.128-7.68 51.712-20.48 138.24-46.592 155.136-39.936 26.624-98.816 26.624-150.528 26.624-24.064 0-74.24-3.584-127.488-7.68h-0.512c-50.688-4.096-102.912-8.192-142.336-9.216v-353.28c51.712-25.088 218.624-120.32 203.264-302.592-1.024-14.848 3.584-15.872 8.704-16.384h3.584c10.752 0 22.528 5.632 25.088 14.336 0.512 3.072 1.536 7.168 2.56 11.776 9.728 39.936 27.648 115.2-14.848 197.632-9.728 18.432-9.728 38.4 0.512 54.784 14.848 23.552 47.104 35.84 95.744 35.84 16.384 0 36.352-2.048 60.416-4.608 26.624-2.56 56.32-6.144 82.432-6.144h4.608c27.136 0.512 36.864 4.608 40.448 6.656l1.024 0.512c8.192 12.288-3.584 43.008-14.848 73.216z" fill="#cdcdcd" p-id="2717"></path></svg>
               {item.article_info.digg_count}
               </div>
           </div>
           
           </Link>
          
           </div>
           </div>
          
           )
         })  )
         :
         <div className='gujia'>
             <div>到底了</div>
             </div>
         
    )

}
export default Listdemo;