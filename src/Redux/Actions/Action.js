import {BASE_URL} from "../../api/API"
import { ADD_TO_CART } from "../Constant/Constants"

export const AddtoCart=(id)=>async(dispatch,getState)=>{
    const data= await((await fetch(`${BASE_URL}/api/product/${id}`)).json())
    console.log(data)
    dispatch({
        type: ADD_TO_CART,
        payload:{
            id:data.id,
            price:data.price,
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
    
}