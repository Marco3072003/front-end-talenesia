import { useEffect, useState } from "react"
import { setCredentials } from "../../features/auth/auth-slice"
import { useUsersBadgesQuery, useUserBadgesQuery } from "../../features/user/user-api-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import UserStats from "../../components/organisms/UserStats"
import Container from "../../components/atoms/Container"
import Card from "../../components/atoms/Card"
import LeaderList from "../../components/molecules/LeaderList"
import userPicture from '../../assets/img/user-picture.png'
import sumPropertyValues from "../../utils/functions/sumPropertyValues";


export default function LeaderboardPage(){
    

    const dispatch = useDispatch()


    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    const role = localStorage.getItem('my-role-key')
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }
    
   
    const [totalPoints, setTotalPoints] = useState('');
    const [peringkat, setPeringkat] = useState('')

    const batchId = localStorage.getItem('batch_id');
    const {data = [], isFetching, isSuccess} = useUsersBadgesQuery({batchId});

    const {data: userStats=[], isFetching: onLoad, isSuccess: finish} = useUserBadgesQuery();
    const arrayUserStats = userStats.data
    const participants = data.data
    
    useEffect(()=>{
        if(finish){
            const points =  arrayUserStats.map((userStats)=>{
                return userStats.detailbadge[0].badgeValue
            })
            const totalPoints = points.reduce((sum,points)=> sum + points, 0);
            setTotalPoints(totalPoints)
           
        } 
        if(isSuccess){
            participants.sort((a,b)=> sumPropertyValues(a.listBadges,'badgeValue') - sumPropertyValues(a.listBadges,'badgeValue'))
      
            console.log(participants)
            
            const peringkat = participants.findIndex((participant) => participant.detailUser.userFullName === username) + 1
            setPeringkat(peringkat)
            }
    },[userStats, data])


    return(
        <Container>
            { role === "PELAJAR" && <UserStats points={finish && totalPoints} peringkat={isSuccess && peringkat}/>}
                <div className="flex flex-col gap-5 mt-10 w-full">

                    <Card className='py-10 px-3 md:px-10 flex flex-col gap-2 bg-white w-full'>
                        <div className="flex justify-between items-center border-b-4 border-black pb-5 mb-8 w-full px-3">
                            <h1 className="text-2xl min-[692px]:text-3xl font-semibold">PERINGKAT</h1>
                            <h1 className="text-2xl min-[692px]:text-3xl min-[692px]:pr-[30px] font-semibold ">PESERTA</h1>
                            <h1 className="text-2xl min-[692px]:text-3xl font-semibold pr-5">POINTS</h1>
                        </div>
                        {!isFetching && participants.map((participant, index)=>{
                            const username = participant.detailUser.userFullName;
                            const listBadges = participant.listBadges;
                            const points = sumPropertyValues(listBadges, 'badgeValue')
                            const position = String(index+1)
                           return (<LeaderList key={index} position={position} userPicture={userPicture} username={username} points={points} />)
                            
                        })}
                    </Card>
                </div>    
        </Container>
    )
}