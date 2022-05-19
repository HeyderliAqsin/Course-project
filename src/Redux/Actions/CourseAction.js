import {BASE_URL} from "../../api/API"
import { GET_BY_ID_COURSE, GET_DISCOUNT_COURSES, GET_POPULAR_COURSES } from "../Constant/CourseConstants"

export const getPopularCourse=() => async(dispatch,getState)=>{
    const data= await((await fetch(`${BASE_URL}/api/Course/popular`)).json())
    dispatch({
        type: GET_POPULAR_COURSES,
        payload:data
    })
    
}

export const getDiscountCourses=()=>async(dispatch,getState)=>{
    const data= await((await fetch(`${BASE_URL}/api/Course/discount`)).json())
    dispatch({
        type: GET_DISCOUNT_COURSES,
        payload:data
    })
    
}

export const getByIdCourse=(id)=> async(dispatch,getState)=>{
    const courseByID=await (await fetch(`${BASE_URL}/api/Course/${id}`)).json()
    console.log(courseByID)
    dispatch({
        type:GET_BY_ID_COURSE,
        payload:courseByID
    })
}