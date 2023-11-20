import { useEffect } from "react"
import { setCredentialsFromLocal } from "../../features/auth/auth-slice"
import { useDispatch } from "react-redux"


export default function MyCoursePage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCredentialsFromLocal())
    })
}