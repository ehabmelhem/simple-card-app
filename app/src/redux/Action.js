import {CHANGE_ARTICLE} from "./ActionTypes"

export const changeArticle = (article)=>({
    type:CHANGE_ARTICLE,
    payload: {
        article
    }
})
