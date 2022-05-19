import { GET_CATEGORY } from "../Constant/CategoryContants";

export const getCategoryReducer=(state={categories:[]},action)=>{
    switch(action.type){
        case GET_CATEGORY:
        if(action.payload){
            return{
                ...state,
                categories:action.payload
            }
        } 
        break;
        default:
        return state;
        
    }
}