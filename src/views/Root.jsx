import Navbar from '../components/organisms/Navbar';
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import SidebarTemplate from '../components/organisms/SidebarTemplate';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPublicSidebar } from '../features/modal/modal-slice';
import SidebarPublicContent from '../components/Contents/SidebarPublicContent';
import SidebarPrivateContent from '../components/Contents/SidebarPrivateContent';

export default function PublicRoot(){
    const [isActive, setIsActive] = useState(null)
    const location = useLocation();
    const page = location.pathname.substring(1);
    const isPublicSidebarCollapsed = useSelector((state)=> state.modal.publicSidebar)
    const isPrivateSidebarCollapsed = useSelector((state)=> state.modal.privateSidebar)
    const isLogin = useSelector((state)=> state.auth.isLogin)
    useEffect(()=>{
        document.body.style.backgroundColor = isLogin ? '#E5F8FF' : '#fffff';
    })

    const menuItemStyle ={
            button: ({active})=>{

                return{
                    '&:hover' : {
                        backgroundColor:'rgba(222, 211, 211,0.5)'
                    },
                    backgroundColor: active ? 'rgba(222, 211, 211,0.5)' : 'none'
                }
            }
    }

    const rootStyles={
            position:'fixed', 
            right: '0px'
    }
    return (
        <>
            <SidebarTemplate
            rootStyles={rootStyles}
            page={page}
            isPublicSidebarCollapsed={isPublicSidebarCollapsed}
            isPrivateSidebarCollapsed={isPrivateSidebarCollapsed}
            >
            {!isLogin ? (
                <SidebarPublicContent
                        isPublicSidebarCollapsed={isPublicSidebarCollapsed}
                        menuItemStyle={menuItemStyle}
                />
            ) : <SidebarPrivateContent isPrivateSidebarCollapsed={isPrivateSidebarCollapsed} 
                                        menuItemStyle={menuItemStyle}/>}
            </SidebarTemplate>

            <Navbar shadowHeader="shadow-md" />
                
            <Outlet />
        </>
    )
}