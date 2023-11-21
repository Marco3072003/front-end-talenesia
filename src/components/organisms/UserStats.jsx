import { useSelector } from "react-redux/es/hooks/useSelector"
import profile from "../../assets/img/user-picture.png"
import { useUserBadgesQuery } from "../../features/user/user-api-slice"


export default function UserStats({points, peringkat}){
    const username = useSelector((state)=> state.auth.username)
    //point, peringkat, username
    
    const listBadges= []
    return(
                <div className="w-full bg-white py-5 px-14 flex justify-between items-center">
                    <div className="flex items-center gap-8 flex-1">
                        <img className="w-[70px] rounded-full" src={profile} alt="" />
                        <h1 className="text-3xl font-semibold">{username}</h1>
                        
                    </div>
                    <div className="bg-neutral-300  w-[3px] h-[100px]"></div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <h1 className="text-teal-700 text-2xl font-semibold">Poin Keaktifan Anda</h1>
                        <h1 className="text-teal-700 text-4xl font-bold">{points}</h1>
                    </div>
                    <div className="bg-neutral-300  w-[3px] h-[100px]"></div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <h1 className="text-teal-700 text-2xl font-semibold">Peringkat Anda</h1>
                        <h1 className="text-teal-700 text-4xl font-bold">{peringkat}</h1>
                    </div>
                </div>
    )
}