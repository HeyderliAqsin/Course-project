import { BASE_URL } from "../../api/API"
import { GET_INSTRUCTORS } from "../Constant/InstructorContants"

export const getInstructors=()=>async(dispatch,getState)=>{
    const data= await((await fetch(`${BASE_URL}/api/Instructor`)).json())
    console.log(data)
    dispatch({
        type: GET_INSTRUCTORS,
        payload:data
    })
    
}