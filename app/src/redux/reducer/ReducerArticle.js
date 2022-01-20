import {CHANGE_ARTICLE,ADD_ARTICLES,DELETE_ARTICLE} from "../ActionTypes"
import {articls} from "../../Utils/articls";

const initialState = {
    activeArticle :null,
    articles:articls,
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
        case DELETE_ARTICLE:{

            const {id,categorIndex}= action.payload;

            let index= state.articles[categorIndex].articls.findIndex((item)=>item.id === id);
            console.log(index)
            if (index > -1) {
                state.articles[categorIndex].articls.splice(index, 1);
              }
              console.log(...state.articles[categorIndex].articls)
            return{
                ...state,
                activeArticle:null,
                articles:[...state.articles]
            }
        }

    default:
        return state
    }
}
export default articleState;