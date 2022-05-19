import { GET_INSTRUCTORS } from "../Constant/InstructorContants";

export const getInstructorsReducer=(state={instructors:[]},action)=>{
    switch(action.type){
        case GET_INSTRUCTORS:
        if(action.payload){
            return{
                ...state,
                instructors:action.payload
            }
        } 
        break;
        default:
        return state;
        
    }
}
