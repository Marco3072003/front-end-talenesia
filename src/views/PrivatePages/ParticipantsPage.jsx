import { useEffect, useState } from "react"
import { setCredentials } from "../../features/auth/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useGetBatchQuery } from "../../features/user/user-api-slice"
import Card from "../../components/atoms/Card"
import Container from "../../components/atoms/Container"
import userPicture from '../../assets/img/user-picture.png'
import UserList from "../../components/molecules/UserList"

export default function ParticipantsPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin)

   /*  useEffect(()=>{
        if(isLogin !== true){
            console.log(isLogin)
            navigate('/login')
        }
        
        dispatch(setCredentialsFromLocal())
    }) */

    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    const batchId = localStorage.getItem('batch_id')
    const role = localStorage.getItem('my-role-key');
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }
    
    const {data: batch= [], isFetching, isSuccess} = useGetBatchQuery({batchId})

    const [mentors, setMentors] = useState([])
    const [participants, setParticipants] = useState([])
    
    useEffect(()=>{
        if(isSuccess){
            const mentorArrays = batch.data[0].mentor
            const mentors = mentorArrays.map((mentor)=> mentor.userFullName)
            const participantArrays = batch.data[0].participant
            const participants = participantArrays.map((participant)=> participant.userFullName)
            setMentors([...mentors])
            setParticipants([...participants])
            console.log(batch)
        }
    },[batch])
    
    const totalMentors = mentors.length
    const totalParticipants = participants.length

    return(
            <Container className='flex w-full gap-10'>
                <div className="flex flex-col gap-5">
                    <Card className='py-10 pl-10 pr-32 flex flex-col gap-2 bg-white'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-people-group pr-2 text-3xl text-teal-700"></i> 
                            <h1 className="text-2xl font-semibold">Peserta</h1>
                            </div>
                        <h1 className="text-4xl font-bold">{totalParticipants}</h1>
                    </Card>
                    <Card className='py-10 pl-10 flex flex-col gap-2 bg-white'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-people-group pr-2 text-3xl text-teal-700"></i> 
                            <h1 className="text-2xl font-semibold">Pengajar</h1>
                            </div>
                        <h1 className="text-4xl font-bold">{totalMentors}</h1>
                    </Card>
                    
                </div>
                <div div className="flex flex-col gap-8 w-full">
                    <Card className='py-5 pl-10 w-full bg-white'>
                        <h1 className="text-4xl font-semibold mb-8">Pengajar</h1>
                        <div className="flex flex-col">
                            {mentors.map((mentor)=> (<UserList username={mentor} userPicture={userPicture}/>))}
                            
                        </div>
                    </Card>
                    <Card className='pt-10 pb-5 pl-10 w-full bg-white mb-8'>
                        <h1 className="text-4xl font-semibold mb-8">Peserta</h1>
                        <div className="flex flex-col">
                            {
                                participants.map((participant)=> (<UserList userPicture={userPicture} username={participant}/>))
                            }
                        </div>
                    </Card>
                </div>
            </Container>
    )
}