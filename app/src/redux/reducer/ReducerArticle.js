import {CHANGE_ARTICLE,ADD_ARTICLES} from "../ActionTypes"

const initialState = {
    activeArticle :null,
    articles:null,
};

const articleState =(state=initialState, action)=>{
    switch(action.type){
        case CHANGE_ARTICLE: {
            const {article} = action.payload;
            return{
                ...state,
                activeArticle: article
            }
        }
        case ADD_ARTICLES:{
            const {articles} = action.payload;
            return{
                ...state,
                articles: articles
            }
        }

    default:
        return state
    }
}
export default articleState;