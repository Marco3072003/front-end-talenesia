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

export default function LeaderboardPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin)


    /* useEffect(()=>{
        if(isLogin !== true){
            console.log(isLogin)
            navigate('/login')
        }
        
        dispatch(setCredentialsFromLocal())
    }) */
    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    if(token !== null){
        dispatch(setCredentials({username, token}))
    }
    
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
           
            // const points = sumPropertyValues(arrayUserStats, arrayUserStats.detailbadge[0].badgeValue)
        } 
        if(isSuccess){
            participants.sort((a,b)=> sumPropertyValues(a.listBadges,'badgeValue') - sumPropertyValues(a.listBadges,'badgeValue'))
      
            console.log(participants)
            
            const peringkat = participants.findIndex((participant) => participant.detailUser.userFullName === username) + 1
            setPeringkat(peringkat)
            }
    },[userStats, data])

    
    
      //arrange participant according their point
      




    return(
        <Container>
            <UserStats points={finish && totalPoints} peringkat={isSuccess && peringkat}/>
                <div className="flex flex-col gap-5 mt-10 w-full">

                    <Card className='py-10 px-10  flex flex-col gap-2 bg-white w-full'>
                        <div className="flex justify-between items-center border-b-4 border-black pb-5 mb-8 w-full px-3">
                            <h1 className="text-3xl font-semibold">PERINGKAT</h1>
                            <h1 className="text-3xl font-semibold pr-24">PESERTA</h1>
                            <h1 className="text-3xl font-semibold pr-5">POINTS</h1>
                        </div>
                        {!isFetching && participants.map((participant, index)=>{
                            const username = participant.detailUser.userFullName;
                            const listBadges = participant.listBadges;
                            const points = sumPropertyValues(listBadges, 'badgeValue')
                            const position = String(index+1)
                           return (<LeaderList key={index} position={position} userPicture={userPicture} username={username} points={points} />)
                            
                        })}


                        {/* <LeaderList position='1' userPicture={userPicture} username='Fernanda Ramadhan Putra Hartono' points='100'/>
                        <LeaderList position='2' userPicture={userPicture} username='Fernanda Ramadhan Putra Hartono' points='100'/>
                        <LeaderList position='3' userPicture={userPicture} username='Fernanda Ramadhan Putra Hartono' points='100'/>
                        <LeaderList position='4' userPicture={userPicture} username='Fernanda Ramadhan Putra Hartono' points='100'/> */}
                    </Card>
                </div>    
        </Container>
    )
}