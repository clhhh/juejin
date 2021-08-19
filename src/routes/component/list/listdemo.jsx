import React, { useState,useEffect } from 'react';
import './list.css'
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../../../services/fake-api';
const Listdemo = props => {
  //  console.log('detaildemoProps',props);
   const[contentHtml,setcontentHtml]=useState()
   const[contentTitle,setcontentTitle]=useState()
   const[contentImg,setcontentImg]=useState()
   const[contentUserImg,setcontentUserImg]=useState()
   const[content,setcontent]=useState()
   const[contentTimes,setcontentTimes]=useState()
   const[contentuser,setcontentuser]=useState()
   useEffect(()=>{
    (async() => {
      let p=await getArticleById(props.id)
      setcontent(p)
      setcontentHtml(p.data.article.article_content)
      setcontentTitle(p.data.article.article_info.title)
      setcontentImg(p.data.article.article_info.cover_image) 
      setcontentuser(p.data.article.author_user_info.user_name)  
      setcontentUserImg(p.data.article.author_user_info.avatar_large)   
      setcontentTimes(p.data.article.article_info.digg_count)                     
  })();
},[]) 
// console.log('content',content);
// console.log('contentTitle',contentTitle);  
// useEffect(()=>{
//   (async() => {
//     let p=await getCommentsByArticleId(props.id)
                           
// })();
// },[])
    return(
        
      <div className='content'>       
        <div className='item' > 
          <div className='user '>
            <img src={contentUserImg} alt="" />        
             <p className='username'>
             {contentuser}
            </p>
            <p className='date'>
              2021年5月22日      阅读{contentTimes}
            </p>
            <p className='fix'></p>
          </div>
          <div className='title'>
            {contentTitle}
          </div>
            {/* <div>
              <img className='detailImg' src={contentImg} alt="" />  
            </div>           */}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} >
          </div>
          <div>

          </div>
        </div>
         
      </div>
         
        
     
    )

}
export default Listdemo;