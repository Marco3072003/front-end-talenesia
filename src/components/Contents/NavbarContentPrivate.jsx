import { Link } from "react-router-dom"

export default function NavbarContentPrivate({pageActive}){
    const active = 'text-emerald-500'
    
    return(
            <>
                <Link to="/dashboard" className={` text-neutral-400 hover:text-blue-200 font-semibold relative
                                        ${pageActive ==='dashboard' && active}`}>           
                Dashboard
                { pageActive === 'dashboard' && <div className="w-full h-[5px] bg-emerald-500 absolute bottom-[-25px]"></div>}
                
                </Link>
                <Link to="/mycourse" className={`text-neutral-400 hover:text-blue-200 font-semibold relative
                                        ${pageActive ==='course' && active}`}>     
                My Course
                { pageActive === 'mycourse' && <div className="w-full h-[5px] bg-emerald-500 absolute bottom-[-25px]"></div>}
                </Link>
                <Link to="/participants" className={`text-neutral-400 hover:text-blue-200 font-semibold relative
                                        ${pageActive ==='participants' && active}`}>     
                Participants
                { pageActive === 'participants' && <div className="w-full h-[5px] bg-emerald-500 absolute bottom-[-25px]"></div>}
                </Link>
                <Link to="/leaderboard" className={`text-neutral-400 hover:text-blue-200 font-semibold relative
                                        ${pageActive ==='leaderboard' && active}`}>     
                Leaderboard
                { pageActive === 'leaderboard' && <div className="w-full h-[5px] bg-emerald-500 absolute bottom-[-25px]"></div>}
                </Link>
            </>
    )
}