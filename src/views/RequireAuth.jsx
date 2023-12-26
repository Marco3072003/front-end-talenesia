import { useLocation, useNavigate, Outlet } from "react-router-dom"; 
import { useSelector } from "react-redux"

export default function RequireAuth() {
    const navigate = useNavigate()
    const token = localStorage.getItem('my-key-to_entry')
    const location = useLocation()
    return(
        token 
            ? <Outlet/>
            : <h1 className="text-7xl font-bold">YOU HAVE TO LOGIN TO ACCESS THIS PAGE</h1>  
    )

}