import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from '../services/fake-api';
import { message } from 'antd';
const aaaModel= {
 
    namespace: 'ArticleListBack',
  
    state: {
      article_list: [],
    },
  
    subscriptions: {
      
    },
  
    effects: {
      * getArticlesList({ payload }, { call, put }) {
      console.log("申请调用展示articles接口")
      const response = yield call(getArticles, payload);
      console.log(response);
      yield put({
        type: 'saveArticleList',
        payload: response,
      });
    },
    * getCategories({ payload }, { call, put }) {
    console.log("申请调用展示Categories接口")
    const response = yield call(getCategories, payload);
    console.log(response);
    
    yield put({
      type: 'saveCategories',
      payload: response,
    });
  },
    },
  
    reducers: {
      saveArticleList(state,{payload}){
        console.log({payload});
        return{
          ...state,
          articleList:payload,
        }
      },
      saveCategories(state,{payload}){
        console.log({payload});
        return{
          ...state,
          CategoriesList:payload,
        }
      },
  }
}
export default aaaModel;
