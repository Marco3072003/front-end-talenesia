import Button from "../atoms/Button"
import { Menu, MenuItem } from "react-pro-sidebar"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setPublicSidebar } from "../../features/modal/modal-slice"

export default function SidebarPublicContent(menuItemStyle, page){
    const dispatch = useDispatch()
    return(
            <>
                <Button type="button" className="text-white min-[580px]:hidden text-[25px] pl-52 pt-5" onClick={()=> dispatch(setPublicSidebar())}><i className="fa-solid fa-bars"></i></Button>
                <Menu menuItemStyles={menuItemStyle} >
                    <MenuItem component={<Link to='/'/>} active={page===''} onClick={()=> dispatch(setPublicSidebar())}> Home </MenuItem>
                    <MenuItem component={<Link to='/course'/>} active={page==='course'} onClick={()=> dispatch(setPublicSidebar())}> Course </MenuItem>
                    <MenuItem component={<Link to='/teacher'/>} active={page==='teacher'} onClick={()=> dispatch(setPublicSidebar())}> Our Teacher </MenuItem>
                    <MenuItem component={<Link to='/login'/>} active={page==='login'} onClick={()=> dispatch(setPublicSidebar())}> Login </MenuItem>
                </Menu>
            </>
    )
}