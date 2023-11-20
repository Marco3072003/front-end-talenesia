import { useEffect } from "react"
import { setCredentialsFromLocal } from "../../features/auth/auth-slice"
import { useDispatch } from "react-redux"


export default function DashboardPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCredentialsFromLocal())
    })
    return(
        <h1>tes</h1>
    )
}