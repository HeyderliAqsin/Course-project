import { BASE_URL } from "../../api/API"
import { GET_CATEGORY } from "../Constant/CategoryContants"

export const getCategory=()=>async(dispatch,getState)=>{
    const data= await((await fetch(`${BASE_URL}/api/api/Category`)).json())
    dispatch({
        type: GET_CATEGORY,
        payload:data
    })
    
}