import { useEffect, useState } from "react"
import { setCredentials } from "../../features/auth/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Container from "../../components/atoms/Container"
import TalensiaBanner from "../../components/molecules/talenesiaBanner"
import BannerAbsensiContent from "../../components/Contents/BannerAbsensiContent"
import logo from "../../assets/img/logo.png"
import CourseCardContent from "../../components/Contents/CourseCardContents"
import Card from "../../components/atoms/Card"
import SubCourseContent from "../../components/Contents/SubCourseContent"
import meetingImg from '../../assets/img/meeting.png'
import pageImage from '../../assets/img/page-image.png'
import pdfImage from '../../assets/img/pdf-image.png'
import submissionImage from '../../assets/img/submission-image.png'
import { useGetMyCourseQuery } from "../../features/user/user-api-slice"

export default function MyCoursePage(){
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
    const learningTrackId = localStorage.getItem('learning_track_id')

    const {data: learningTrack=[], isFetching, isSuccess} = useGetMyCourseQuery({learningTrackId})

    const [courses, setCourses] = useState([])
    
    useEffect(()=>{
    if(isSuccess){
     const courses = learningTrack.data[0].courseDetail
     setCourses([...courses])
    }  

    },[learningTrack])
    
    console.log(courses)

    const username = localStorage.getItem('my-user-when-entry')

    const token = localStorage.getItem('my-key-to_entry')
    const role = localStorage.getItem('my-role-key');
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }
    

    const absensi = '70%'
    const cardStyle ='bg-white px-12 py-4 mb-8'
    return(
            <Container>
                <TalensiaBanner logo={logo} batch='1' learningTrack='Admin Perkantoran'>
                    <BannerAbsensiContent absensi={absensi} />
                </TalensiaBanner>
                <Card className={cardStyle} >
                        {
                        courses.map((course, index) => {
                            const subCourse = course.subCourseDetail
                               return <CourseCardContent courseName={course.courseName} sesi={String(index+1)}>
                                            {
                                                subCourse.map((subCourse,index)=>{
                                                    const judulSubcourse = subCourse.subCourseName
                                                    console.log(subCourse)
                                                    const courseId = subCourse.courseId
                                                    const tipeSubcourse = subCourse.subCourseType
                                                    const link = subCourse.subCourseMaterial[0].link
                                                    const subCourseId = subCourse.subCourseId
                                                    const imgUrl = tipeSubcourse == 'LIVESESSION' ? meetingImg : tipeSubcourse == 'MODULE' ? pageImage : null
                                                    return <SubCourseContent courseId={courseId} subCourseId={subCourseId} link={link} judulSubcourse={judulSubcourse} tipeSubcourse={tipeSubcourse} imgUrl={imgUrl}/>
                                                })
                                            }
                                      </CourseCardContent> })
                                
                            }
                        
                        
                        {/* <CourseCardContent courseName='Judul Materi sesi 1' sesi="1">
                            <SubCourseContent link="https://www.youtube.com/" judulSubcourse='Pertemuan Sesi 1' tipeSubcourse="Link" imgUrl={meetingImg} opened="18.00" due="20.00"/>
                            <SubCourseContent link="https://www.youtube.com/" judulSubcourse='Video Sesi 1' tipeSubcourse="Video" imgUrl={pageImage} />
                            <SubCourseContent link="https://www.youtube.com/" judulSubcourse='Materi Pembelajaran Sesi 1' tipeSubcourse="File" imgUrl={pdfImage} />
                            <SubCourseContent link="https://www.youtube.com/" judulSubcourse='Tugas Sesi 1' tipeSubcourse="Assignment" imgUrl={submissionImage} />
                        </CourseCardContent> */}
                </Card>
            </Container>
            
    )   
}