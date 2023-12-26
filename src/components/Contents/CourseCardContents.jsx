import learningImage from '../../assets/img/learning-img.jpg'
import logo from '../../assets/img/logo.png'
import meetingLogo from '../../assets/img/meeting.png'
import pageImage from '../../assets/img/page-image.png'
import pdfImage from '../../assets/img/pdf-image.png'
import submissionImage from '../../assets/img/submission-image.png'

export default function CourseCardContent({sesi, children, courseName}){
    return( <>
                <h1 className="font-semibold text-2xl mb-2">Course Sesi: {sesi}</h1>

                    <div className="flex w-full h-[150px] bg-blue-800  items-center relative mb-5">
                        <div className="flex pl-7">
                            <img className="w-[180px] rounded-lg "  src={learningImage} alt="header-image" />
                        </div>
                        <div className="flex flex-col items-center w-full pr-32">
                            <h1 className="text-white text-xl">Sesi 1</h1>
                            <h1 className="text-white text-2xl font-semibold">{courseName}</h1>
                        </div>
                        <div  className="absolute right-0 top-0">
                            <img className="w-[150px] bg-gray-100" src={logo} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 mb-5">
                        {children}
                    </div>
            </>

    )
}