import { useSelector } from "react-redux"
import Card from "../atoms/Card"


export default function TalensiaBanner({logo, children}){
    const batch = useSelector((state)=> state.detailUser.batchName)
    const learningTrack = useSelector((state)=>state.detailUser.learningTrackName)
    const participants = useSelector((state) => state.detailParticipants.participants)
    return(
            <Card className='px-10 py-5 mb-8 bg-teal-700'>
                <div className="bg-white w-[250px] flex justify-center px-5 py-3 rounded-lg mb-8">
                    <img className="w-200px" src={logo} alt="" />
                </div>
                <h1 className="text-white text-3xl font-semibold mb-3">Kursus Talenesia Batch {batch} : {learningTrack}</h1>
                {children}    
                
            </Card>
    )
}