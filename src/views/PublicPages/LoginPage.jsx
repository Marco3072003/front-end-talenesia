// import LoginForm from '../../components/organisms/LoginForm';

// function LoginPage() {
//     return (
//         // <Navbar />
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
//                 <LoginForm />
//             </div>
//         </div>
//     )
// }

// export default LoginPage;

import LoginForm from '../../components/organisms/LoginForm';

import loginImage from '../../assets/img/login.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  setCredentialsFromLocal } from '../../features/auth/auth-slice';
import { useLoginMutation } from '../../features/auth/auth-api-slice';
import { useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';




function Login () {
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogin = useSelector((state)=> state.auth.isLogin)
  const [previousPath, setPreviousPath] = useState('');
  const location = useLocation();

  /* useEffect(()=>{
    dispatch(setCredentialsFromLocal())
    if(isLogin){
      navigate('/dashboard');
    }
  }) */
  
  async function getToken(email, password){
    try{
        const userData = await login({ email, password}).unwrap()
        console.log(userData)
        /* if(userData.data === undefined){
          throw new Error(userData.error.data.error)
        }
         */
        navigate('/dashboard')
        

    }catch(err){
            console.error(err)
            
    }
    
  }

 
  
 
  return (
    <>
        {isLoading ?
                     
                     <ReactLoading type={'spinningBubbles'} color={'gray'} className='absolute left-[50%] bottom-[40%]'/> :  
                     
                      <div className=" w-screen h-[89%] flex flex-row items-center gap-36 justify-around p-20 sm:px-48 flex-1">
                      <img
                        src={loginImage}
                        className="hidden lg:block w-1/3 hover:scale-150 transition-all duration-500 transform "
                      />
                      <LoginForm getToken = {getToken} />
            
                    </div>
        }
       
        
    </>
  );
}

export default Login;
