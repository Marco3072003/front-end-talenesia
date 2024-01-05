import Navbar from "../../components/organisms/Navbar";
import Container from "../../components/atoms/Container";
import Card from "../../components/atoms/Card";
import AdminImage from "../../assets/img/user-picture.png"
import CardMentorContent from "../../components/Contents/CardMentorContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setCredentialsFromLocal } from "../../features/auth/auth-slice";

export default function TeacherPage(){
    
    return(
        <>
            <Container className='flex flex-col items-center'>
                    <h1 className="text-sky-900 text-[28px] font-semibold font-['Outfit'] mb-5">Mentor Admin Perkantoran</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-16 min-[1010px]:grid-cols-3 min-[1280px]:grid-cols-4 lg:gap-x-28 gap-y-10 mb-10">
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy'
                            gradient='from-sky-800 from-10% via-sky-800 via-30% to-transparent' color='sky-900' 
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-sky-800 from-10% via-sky-800 via-30% to-transparent' color='sky-900'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-sky-800 from-10% via-sky-800 via-30% to-transparent' color='sky-900'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-sky-800 from-10% via-sky-800 via-30% to-transparent' color='sky-900'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                    </div>
                    <h1 className="text-green-800 text-[28px] font-semibold font-['Outfit'] mb-5">Mentor Admin HRGA</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-16 min-[1010px]:grid-cols-3 min-[1280px]:grid-cols-4 lg:gap-x-28 gap-y-10 mb-10">
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-green-700 from-10% via-green-600 via-30% to-transparent' color='green-800'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-green-700 from-10% via-green-600 via-30% to-transparent' color='green-800'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-green-700 from-10% via-green-600 via-30% to-transparent' color='green-800'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-green-700 from-10% via-green-600 via-30% to-transparent' color='green-800'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                    </div>
                    <h1 className="text-yellow-600 text-[28px] font-semibold font-['Outfit'] mb-5">Mentor Fullstack Developer</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-16 min-[1010px]:grid-cols-3 min-[1280px]:grid-cols-4 lg:gap-x-28 gap-y-10 mb-10">
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy'
                            gradient='from-yellow-500 from-10% via-yellow-400 via-30% to-transparent' color='yellow-600'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-yellow-500 from-10% via-yellow-400 via-30% to-transparent' color='yellow-600'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-yellow-500 from-10% via-yellow-400 via-30% to-transparent' color='yellow-600'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardMentorContent imgUrl={AdminImage} mentorName='Mentor Dummy' 
                            gradient='from-yellow-500 from-10% via-yellow-400 via-30% to-transparent' color='yellow-600'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum risus. Etiam quis vulputate turpis. Donec sit amet magna a tortor blandit feugiat. Curabitur sit amet leo et nisi accumsan dictum. '/>
                        </Card>
                    </div>
                
            </Container>
        </>
    )
}