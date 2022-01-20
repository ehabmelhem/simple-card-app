import {CHANGE_ARTICLE,ADD_ARTICLES} from "./ActionTypes"

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