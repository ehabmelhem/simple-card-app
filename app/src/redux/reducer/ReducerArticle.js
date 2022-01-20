import {CHANGE_ARTICLE} from "../ActionTypes"

const initialState = {
    activeArticle :null
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
    default:
        return state
    }
}
export default articleState;