import AdminImage from "../../assets/img/user-picture.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/auth/auth-slice";
import { setLogoutModal } from "../../features/modal/modal-slice";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";


export default function Username(){
    const navigate = useNavigate()
    const logoutModal = useSelector((state)=> state.modal.logoutModal)
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.auth.username)
    const isOpenModal = useSelector((state)=> state.modal.logoutModal)

    function handleLogoutModal(){
        dispatch(setLogoutModal())
    }

    function handleLogout(){
        dispatch(logout())
    }

    
    return(
            <div onClick ={handleLogoutModal} className=" flex gap-5 cursor-pointer items-center relative max-[1030px]:hidden" >
              <h2 className="text-neutral-400">{username}</h2>
               <img className="h-[35px] rounded-full" src={AdminImage} alt="profile-image" />
                { isOpenModal && <div className="rounded-lg absolute top-[60px] right-[2%] w-[100px] h-[50px] bg-white shadow-[0_15px_20px_-10px_rgba(0,0,0,0.3),0_-15px_20px_-20px_rgba(0,0,0,0.3)] 
                                flex justify-center items-start pt-3 cursor-auto"> 
                    <Button type="button" label={'Logout'} className="py-[3px] px-[8px] bg-red-800 relative text-white rounded-md text-sm" onClick={handleLogout} />
                   </div>}
            </div>

    )
}