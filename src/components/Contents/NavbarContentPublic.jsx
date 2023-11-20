
import { Link } from "react-router-dom";
export default function NavbarContentPublic({pageActive}){
  const active ="text-white bg-sky-900 py-[5px] px-[14px] rounded-full";
    return(
        <div className="flex items-center space-x-8 md:space-x-8 max-[580px]:hidden">
            <Link to="/" className={`text-slate-700 hover:text-blue-200 font-semibold
                                    ${pageActive ==='' && active}`}>           
              Home  
            </Link>
            <Link to="/course" className={`text-slate-700 hover:text-blue-200 font-semibold
                                    ${pageActive ==='course' && active}`}>     
              Course
            </Link>
            <Link to="/teacher" className={`text-slate-700 hover:text-blue-200 font-semibold
                                    ${pageActive ==='teacher' && active}`}>     
              Our Teacher
            </Link>
            <Link to="/login"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none 
              focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-600 text-white hover:text-slate-100 hover:bg-teal-600
               active:bg-teal-800 active:text-blue-100 focus-visible:outline-teal-600"
            >
              <span>Login</span>
            </Link>
        </div>
    )
}