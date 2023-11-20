
export default function  CardMentorContent({imgUrl, mentorName, description, gradient, color}){
    return( 
        <>
            <div className={`w-full h-[180px] flex items-center justify-center bg-gradient-to-b ${gradient} to-transparent`}>
                <img src={imgUrl} alt="mentor-picture" className="h-[100px]  rounded-full" />
            </div>
            <div className="flex flex-col items-center justify-center px-3 mb-5 mt-5">
                <h1 className={`text-${color} text-[22px] font-semibold font-['Roboto']`}>{mentorName}</h1>
                <p className="text-center">
                {description} 
                </p>
            </div>
        </>
    )
}