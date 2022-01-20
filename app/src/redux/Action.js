import {CHANGE_ARTICLE,ADD_ARTICLES,DELETE_ARTICLE} from "./ActionTypes"

export const changeArticle = (article)=>({
    type:CHANGE_ARTICLE,
    payload: {
        article
    }
})
export const addArticles = (articles)=>({
    type:ADD_ARTICLES,
    payload: {
        articles
    }
})

export const deleteArticle =(id,categorIndex)=>({
    type:DELETE_ARTICLE,
    payload:{
    id,
    categorIndex
    }
})