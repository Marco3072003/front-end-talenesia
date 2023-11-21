import { useEffect } from "react"
import { setCredentialsFromLocal } from "../../features/auth/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function AssignmentPage(){
    /* const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin)
    useEffect(()=>{
        if(isLogin !== true){
            console.log(isLogin)
            navigate('/login')
        }
        
        dispatch(setCredentialsFromLocal())
    }) */

}