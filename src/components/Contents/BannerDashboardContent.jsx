import { useSelector } from "react-redux"

export default function BannerDashboardContent(){
    const participants = useSelector((state) => state.detailParticipants.participants)
    const totalParticipants = participants.length;
    return(
                    <div className="  w-[170px] py-2 flex justify-center rounded-md">
                        <h1 className="text-white text-xl font-semibold ">
                            <i className="fa-solid fa-people-group pr-2"></i>  { totalParticipants } peserta
                        </h1>
                    </div>
    )
}