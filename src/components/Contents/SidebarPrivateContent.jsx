import { setLogoutModal, setPrivateSidebar } from "../../features/modal/modal-slice"
import { useDispatch } from "react-redux"
import { Menu, MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"
import Button from "../atoms/Button"
import { logout } from "../../features/auth/auth-slice"

export default function SidebarPrivateContent(menuItemStyle, page){
    const dispatch = useDispatch()
    
    return(
            <>
                <Button type="button" className="text-white min-[1020px]:hidden text-[25px] pl-52 pt-5" onClick={()=> dispatch(setPrivateSidebar())}><i className="fa-solid fa-bars"></i></Button>
                <Menu menuItemStyles={menuItemStyle} >
                    <MenuItem component={<Link to='/dashboard'/>} active={page==='dashboard'} onClick={()=> dispatch(setPrivateSidebar())}> Dashboard </MenuItem>
                    <MenuItem component={<Link to='/mycourse'/>} active={page==='mycourse'} onClick={()=> dispatch(setPrivateSidebar())}> My Course </MenuItem>
                    <MenuItem component={<Link to='/participants'/>} active={page==='participants'} onClick={()=> dispatch(setPrivateSidebar())}> Participants </MenuItem>
                    <MenuItem component={<Link to='/leaderboard'/>} active={page==='leaderboard'} onClick={()=> dispatch(setPrivateSidebar())}> Leaderboard </MenuItem>
                    <MenuItem onClick={()=> dispatch(logout())} active={page==='leaderboard'}> Logout </MenuItem>
                </Menu>
            </>
    )
}