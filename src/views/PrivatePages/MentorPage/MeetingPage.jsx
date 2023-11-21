import { useEffect, useState } from "react"
import { setCredentials } from "../../../features/auth/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Container from "../../../components/atoms/Container"
import Card from "../../../components/atoms/Card"
import meetingImage from "../../../assets/img/meeting.png"
import FormInput from "../../../components/molecules/FormInput"
import Button from "../../../components/atoms/Button"
import userImage from '../../../assets/img/user-picture.png'
import { setIsOpenUpdate, setIsSubmit, addLink } from "../../../features/mentor/meeting"
import { useGetDetailSubcourseQuery, useUpdateSubcourseMaterialMutation } from "../../../features/user/user-api-slice"

import { useParams } from "react-router-dom"

export default function MeetingPage(){
    const [updateSubcourseMaterial, {isLoading}] = useUpdateSubcourseMaterialMutation()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin)

    const username = localStorage.getItem('my-user-when-entry')
    const token = localStorage.getItem('my-key-to_entry')
    const role = localStorage.getItem('my-role-key');
    if(token !== null){
        dispatch(setCredentials({username, token, role}))
    }


    const{ courseId, subCourseId } = useParams()
    const [inputLink, setInputLink] = useState('')
    const [subCourseName, setSubCourseName] = useState('')
    const [subCourseType, setSubCourseType] = useState('')
    const [description, setDescription] = useState('')
    const [openDate, setOpenDate] = useState('')
    const [closeDate, setCloseDate] = useState('')

    const {data: subCourse, isFetching, isSuccess} = useGetDetailSubcourseQuery({subCourseId})


    useEffect(()=>{

        if(isSuccess){
            const link = subCourse.data.subCourseMaterial[0].link
            const description = subCourse.data.subCourseMaterial[0].description
            const openDate = subCourse.data.openDate
            const closeDate = subCourse.data.openDate
            const subCourseName = subCourse.data.subCourseName
            const subCourseType = subCourse.data.subCourseType
            dispatch(addLink({link}))
            setDescription(description)
            setOpenDate(openDate)
            setCloseDate(closeDate)
            setSubCourseName(subCourseName)
            setSubCourseType(subCourseType)
            // console.log(subCourseType)
            // console.log(subCourseName)
        }
        
        
    }, [subCourse])


    const isSubmit = useSelector((state)=> state.meeting.isSubmit)
    const isOpenUpdate = useSelector((state)=> state.meeting.isOpenUpdate)
    const isLink = useSelector((state)=> state.meeting.isLink)
    const link = useSelector((state)=> state.meeting.link)

    

    function handleLink(event){
        event.preventDefault()
        const link = inputLink
        console.log(inputLink)
    }

    function updateLink(event){
        event.preventDefault()
        const body = {
            subCourseName,
            courseId,
            subCourseMaterial:{
                description,
                link
            },
            subCourseType,
            openDate,
            closeDate
        }
        updateSubcourseMaterial({subCourseId, body})
        dispatch(isOpenUpdate)
    }

    return(
        <Container className='flex flex-col gap-10'>
            <Card className='flex flex-col  px-10 bg-white pb-5 items-start'>
                    <div className="flex gap-5 pt-10 pb-5">
                        <div className='bg-gray-300 rounded-lg w-[60px] py-2 flex items-center justify-center'> 
                            <img className="w-[50px] h-[45px] rounded-lg" src={meetingImage} alt="" />
                        </div>
                        <div>
                            <h1>{subCourseType}</h1>
                            <h1 className="text-orange-600 font-semibold text-2xl text-['Roboto']">{subCourseName}</h1>
                        </div>
                    </div>
                    {/* //className, label, type, placeholder, value, name, onChange, classNameInput */}
                    { !link || link === '' && (<form className="w-full" onSubmit={handleLink}><FormInput onChange={(e)=> setInputLink(e.target.value)} classNameInput="w-full px-5 py-3 border-2 border-gray-400 rounded-lg" className='w-full lg:w-full' placeholder="Insert your link meeting without enter or space"/>
                        
                    <Button className='ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg' label="Save" type="submit" />
                        </form> )}

                        { link && (
                            <>
                            <h1 className="text-blue-900 text-2xl pb-3">{link}</h1>
                              { !isOpenUpdate &&  <Button onClick={()=> dispatch(setIsOpenUpdate())} className='ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg' label="Edit" type="submit"/> }
                            </>
                        )} 
                    
                
                    { isOpenUpdate && (<form className="w-full" onSubmit={updateLink}>
                        {/* //className, label, type, placeholder, value, name, onChange, classNameInput */}
                        <FormInput onChange={(e)=> setInputLink(e.target.value)} classNameInput="w-full px-5 py-3 border-2 border-gray-400 rounded-lg" className='w-full lg:w-full' placeholder="Insert your link meeting without enter or space"/>
                        {/* label, type, className, id, onClick, children */}
                        <Button className='ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg' label="Edit" type="submit" />
                        </form>
                    )
                    }

                    
                   
                    
            </Card>
            <Card className='flex flex-col px-10 bg-white pb-5 pt-6 items-start '>
                    <h1 className="text-4xl font-semibold mb-8">Peserta</h1>
                            <div className="w-full flex items-center border-b-2">
                                <div className="flex flex-col w-full">
                                    <div className="flex gap-10 items-center  pb-3 mr-12  w-full ">
                                        <img className=" h-[60px] rounded-full"src={userImage} alt="" />
                                        <h1 className="text-3xl font-semibold">User1</h1>
                                    </div>
                                </div>
                                
                                    <select className="mr-5 px-5 py-2 font-semibold text-lg" name="absensi" id="absensi">
                                        <option value="MVP">MVP</option>
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="NOACTIVE">NOACTIVE</option>
                                        <option value="ABSEN">ABSEN</option>
                                    </select>
                            </div>
                    
            </Card>
        </Container>
    )
}