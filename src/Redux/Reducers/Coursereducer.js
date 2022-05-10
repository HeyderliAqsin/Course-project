import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from "../Constant/Constants";



export const courseReducer=(state={courseitems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
        const item=action.payload;
        const existItem=state.courseitems.find((x)=>x.id===item.id);
        if(existItem){
            return{
                ...state,
                courseitems: state.courseitems.map((x)=>
                x.id ===existItem.id ? item :x
                ),
            };
            
        } else{
            return{
                ...state,
                courseitems: [...state.courseitems,item],
            };
        }
        case REMOVE_FROM_CART:
            return{

            }
        case ADJUST_QTY:
            return{
                
            }

        
        default:{
            return state;
        }
    }
}