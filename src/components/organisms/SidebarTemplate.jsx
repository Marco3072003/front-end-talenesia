import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Button from '../atoms/Button';
import { useDispatch, useSelector } from "react-redux";


export default function SidebarTemplate({isPublicSidebarCollapsed, isPrivateSidebarCollapsed,  rootStyles,  children }) {
    const isLogin = useSelector((state)=> state.auth.isLogin)    
    
    
    return(
        <Sidebar collapsed={isLogin ? isPrivateSidebarCollapsed : isPublicSidebarCollapsed } backgroundColor="rgba(20, 59, 117, 1)" 
             className={`text-white h-full ${isLogin ? 'min-[1020px]:hidden' && (isPrivateSidebarCollapsed && 'hidden'  ) : 'min-[580px]:hidden' && (isPublicSidebarCollapsed && 'hidden min-[580px]:hidden')}  `} rootStyles={rootStyles}>
                {children}
        </Sidebar>
    )
}