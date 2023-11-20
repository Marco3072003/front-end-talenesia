import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Navbar from '../../components/organisms/Navbar';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import { useLocation } from 'react-router-dom';

export default function PublicRoot(){
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isActive, setIsActive] = useState(null)
    const location = useLocation();
    const page = location.pathname.substring(1);


    function handleSidebar(){
        setIsCollapsed(!isCollapsed);

    }

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
    return(
        <>
             <Sidebar collapsed={isCollapsed} backgroundColor="rgba(20, 59, 117, 1)" 
             className={`text-white h-full ${isCollapsed && 'hidden'} min-[580px]:hidden `} rootStyles={rootStyles}>
                <Button type="button" className="text-white min-[580px]:hidden text-[25px] pl-52 pt-5" onClick={handleSidebar}><i className="fa-solid fa-bars"></i></Button>

                <Menu menuItemStyles={menuItemStyle} >
                    <MenuItem component={<Link to='/'/>} active={page===''} onClick={handleSidebar}> Home </MenuItem>
                    <MenuItem component={<Link to='/course'/>} active={page==='course'} onClick={handleSidebar}> Course </MenuItem>
                    <MenuItem component={<Link to='/teacher'/>} active={page==='teacher'} onClick={handleSidebar}> Our Teacher </MenuItem>
                    <MenuItem component={<Link to='/login'/>} active={page==='login'} onClick={handleSidebar}> Login </MenuItem>
                </Menu>
            </Sidebar>
            <Navbar shadowHeader="shadow-md" handleSidebar={handleSidebar}/>
            
            <Outlet/>
        </>
    )
}