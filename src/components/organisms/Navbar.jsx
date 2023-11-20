// function Navbar () {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-3xl font-bold text-white">Your Logo</div>
//         <ul className="flex space-x-6">
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import Button from '../../components/atoms/Button';

// function Navbar() {
//   return (
//     <header className="py-2 bg-transparent">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-12">
//           <a aria-label="Home" href="#">
//             <img
//               src="https://talenesia.com/landing_assets/images/logo.png"
//               alt="Home"
//               className="h-10 w-auto"
//             />
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#features"
//           >
//             Features
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#testimonials"
//           >
//             Testimonials
//           </a>
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="#pricing"
//           >
//             Pricing
//           </a>
//         </div>
//         <div className="flex items-center space-x-8">
//           <a
//             className="text-slate-700 hover:text-blue-200 transition duration-300 ease-in-out"
//             href="/login"
//           >
//             Sign in
//           </a>
//           <Button color="#22897D" text="Get started today" />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import NavbarContentPublic from '../Contents/NavbarContentPublic'
import NavbarContentPrivate from "../Contents/NavbarContentPrivate";
import Username from "../molecules/Username";
import { useSelector } from "react-redux"


function Navbar ({shadowHeader, handleSidebar, NavbarContent}) {
  const isLogin = useSelector((state)=> state.auth.isLogin)
  const location = useLocation();
  const page = location.pathname.substring(1);

  
  

  return (
    <header className={`py-4 ${shadowHeader}`}>
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
            { isLogin && <Username /> }
          </div>

        <Button type="button" className="text-sky-900 min-[580px]:hidden text-[25px]" onClick={handleSidebar}><i className="fa-solid fa-bars"></i></Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
