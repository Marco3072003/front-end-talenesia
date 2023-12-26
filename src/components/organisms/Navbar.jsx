import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import NavbarContentPublic from '../Contents/NavbarContentPublic'
import NavbarContentPrivate from "../Contents/NavbarContentPrivate";
import Username from "../molecules/Username";
import { useDispatch, useSelector } from "react-redux"
import { setPrivateSidebar, setPublicSidebar } from "../../features/modal/modal-slice";

function Navbar ({shadowHeader}) {
  const isLogin = useSelector((state)=> state.auth.isLogin)
  const location = useLocation();
  const page = location.pathname.substring(1);
  const dispatch = useDispatch()
  

  return (
    <header className={`bg-white py-4 ${shadowHeader}`}>
      <div className="h-full container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-full flex justify-between">
          <div  className=" flex items-center md:space-x-12">
            <a aria-label="Home" href="#">
              <img
                src="https://talenesia.com/landing_assets/images/logo.png"
                alt="Home"
                className="h-10 w-auto"
              />
            </a>

           { isLogin && <NavbarContentPrivate pageActive = { page } />} 

          </div>
          
          <div className="flex items-center space-x-8 md:space-x-8 max-[580px]:hidden">
            
            { !isLogin && <NavbarContentPublic pageActive={page}/> }
            
          </div>
          { isLogin && <Username /> }
        {!isLogin && <Button type="button" className="text-sky-900 min-[580px]:hidden text-[25px]" onClick={()=> dispatch(setPublicSidebar())}>
          <i className="fa-solid fa-bars"></i></Button>}
        {isLogin && <Button type="button" className="text-sky-900 min-[1020px]:hidden text-[25px]" onClick={()=> dispatch(setPrivateSidebar())}>
          <i className="fa-solid fa-bars"></i></Button>}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
