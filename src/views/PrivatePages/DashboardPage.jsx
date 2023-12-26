import { setCredentials, setCredentialsFromLocal } from "../../features/auth/auth-slice"
import { setDetailUser } from "../../features/user/detail-user"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserLibrariesQuery, useUserBadgesQuery, useUsersBadgesQuery } from "../../features/user/user-api-slice"
import  Card  from '../../components/atoms/Card'
import Container from "../../components/atoms/Container"
import UserStats from "../../components/organisms/UserStats"
import TalenesiaBanner from "../../components/molecules/TalenesiaBanner"
import BannerDashboardContent from "../../components/Contents/BannerDashboardContent"
import logo from "../../assets/img/logo.png"
import { setParticipants } from "../../features/user/participants-class"


export default function DashboardPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    const role = localStorage.getItem('my-role-key');
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }

    
    
    const {data: userLibraries = [], isFetching, isSuccess} = useUserLibrariesQuery()
    function sumPropertyValues(arr, propertyName) {
        return arr.reduce((sum, obj) => {
          // Check if the property exists in the object
          if (obj.hasOwnProperty(propertyName)) {
            return sum + obj[propertyName];
          }
          return sum;
        }, 0);
      }
    const [totalPoints, setTotalPoints] = useState('');
    const [peringkat, setPeringkat] = useState('')

    const batchId = localStorage.getItem('batch_id');
    
    const {data = [], isLoading, isSuccess: isFinish} = useUsersBadgesQuery({batchId});
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
        if(isFinish){
            participants.sort((a,b)=> sumPropertyValues(a.listBadges,'badgeValue') - sumPropertyValues(a.listBadges,'badgeValue'))
            
            const peringkat = participants.findIndex((participant) => participant.detailUser.userFullName === username) + 1
                setPeringkat(peringkat)
            }
    },[userStats, data])

    
    

    useEffect( ()=>{
        if(isSuccess){
            const batchId = userLibraries.data.batchId[0];
            const batchName = userLibraries.data.infoBatches[0][0].batchName;
            const learningTrackName = userLibraries.data.infoBatches[0][0].learningTrackDetail[0].learningTrackName;
            const learningTrackId = userLibraries.data.infoBatches[0][0].learningTrackDetail[0].learningTrackId;
            const participants = userLibraries.data.infoBatches[0][0].participant
            const mentors = userLibraries.data.infoBatches[0][0].mentor
            dispatch(setDetailUser({batchId, batchName, learningTrackName, learningTrackId}))
            dispatch(setParticipants({participants, mentors}))      
        }
        
    },[userLibraries,  dispatch])


    return(
            <Container>
                    <TalenesiaBanner logo={logo}   >
                        <BannerDashboardContent  />
                    </TalenesiaBanner>
            { role === 'PELAJAR' && <UserStats points={finish && totalPoints} peringkat={isFinish && peringkat}/>}        
            </Container>
            
     
        
    )
}