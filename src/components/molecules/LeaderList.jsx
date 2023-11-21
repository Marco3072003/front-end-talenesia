export default function LeaderList({position, userPicture, username, points}){
    return(        
                <div className="flex justify-between items-center border-b-2 pb-4 mb-5 w-full px-10">
                    <h1 className={`${position === '1' ?'text-7xl text-yellow-400': position === '2'? 'text-6xl text-gray-400' : 
                                                       position === '3' ? 'text-5xl text-[#9e5a37]' : 'text-4xl'   } pl-5  font-semibold`}>{position}</h1>
                    <div className="flex gap-5 items-center">
                        <img className="h-[50px] rounded-full"src={userPicture} alt="" />
                        <h1 className="text-2xl font-semibold">{username}</h1>
                    </div>
                    <h1 className="text-3xl font-semibold">{points}pt</h1>
                </div>
                        
    )
}