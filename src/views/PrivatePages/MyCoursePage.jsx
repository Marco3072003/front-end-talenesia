import { useEffect, useState } from "react"
import { setCredentials } from "../../features/auth/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Container from "../../components/atoms/Container"
import TalensiaBanner from "../../components/molecules/TalenesiaBanner"
import BannerAbsensiContent from "../../components/Contents/BannerAbsensiContent"
import logo from "../../assets/img/logo.png"
import CourseCardContent from "../../components/Contents/CourseCardContents"
import Card from "../../components/atoms/Card"
import SubCourseContent from "../../components/Contents/SubCourseContent"
import meetingImg from '../../assets/img/meeting.png'
import pageImage from '../../assets/img/page-image.png'
import pdfImage from '../../assets/img/pdf-image.png'
import submissionImage from '../../assets/img/submission-image.png'
import { useGetMyCourseQuery, useGetUserProgressByBatchQuery } from "../../features/user/user-api-slice"

export default function MyCoursePage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin)
    const batchId = localStorage.getItem('batch_id')
    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    const role = localStorage.getItem('my-role-key');
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }
    
    
    const learningTrackId = localStorage.getItem('learning_track_id')

    const {data: learningTrack=[], isFetching, isSuccess} = useGetMyCourseQuery({learningTrackId})
     const {data: userProgress=[], isFetching: isFetchingProgress, isSuccess: isSuccessProgres} = useGetUserProgressByBatchQuery({batchId})
    
    const [courses, setCourses] = useState([])
    const [totalCourses, setTotalCourses] = useState()
    const [persentaseAbsensi, setPersentaseAbsensi] = useState()
    const [progressAbsensi, setProgressAbsensi] = useState()

    useEffect(()=>{
    if(isSuccess && isSuccessProgres){
     const Courses = learningTrack.data[0].courseDetail
     setCourses([...Courses])
     const progressUser = userProgress.data.length
     const coursesTotal = Courses.length
     const absensi = progressUser / coursesTotal * 100

     setPersentaseAbsensi(absensi)

    }  

    },[learningTrack, userProgress])

    
    const cardStyle ='bg-white px-12 py-4 mb-8'
    return(
            <Container>
                <TalensiaBanner logo={logo} batch='1' learningTrack='Admin Perkantoran'>
                    
                    {role==='PELAJAR' && <BannerAbsensiContent absensi={persentaseAbsensi} />}
                </TalensiaBanner>
                <Card className={cardStyle} >
                        {
                        courses.map((course, index) => {
                            const subCourse = course.subCourseDetail
                               return <CourseCardContent courseName={course.courseName} sesi={String(index+1)}>
                                            {
                                                subCourse.map((subCourse,index)=>{
                                                    const judulSubcourse = subCourse.subCourseName
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
                        
                </Card>
            </Container>
            
    )   
}