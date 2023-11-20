import AdminImage from "../../assets/img/user-picture.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/auth/auth-slice";
import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.auth.username)
    function handleLogout(){
        dispatch(logout())
        navigate('/')
    }
    return(
            <div onClick ={handleLogout} className=" flex gap-5 cursor-pointer items-center" >
              <h2 className="text-neutral-400">{username}</h2>
               <img className="h-[35px] rounded-full" src={AdminImage} alt="profile-image" />
            </div>
    )
}