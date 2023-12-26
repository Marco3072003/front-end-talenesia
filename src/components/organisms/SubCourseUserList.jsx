

export default function SubCourseUserList({userImage, username, badgeId,  handleChangeBadge, userId, handlePresent, 
                                           handleDeletePresent, attendData, isOpenAttend, 
                                           setIsOpenAttend}){
    if(!attendData){
            setIsOpenAttend(true)

    }else{
        setIsOpenAttend(false)

    }
    return(
                <div className="w-full flex items-center border-b-2 mb-5">
                        <div className="flex flex-col w-full">
                            <div className="flex gap-10 items-center  pb-3 mr-12  w-full ">
                                <img className=" h-[60px] rounded-full"src={userImage} alt="" />
                                <h1 className="text-3xl font-semibold">{username}</h1>
                            </div>
                        </div>
                        {

                            isOpenAttend ?
                            <button type="button" onClick={()=>handlePresent(userId)} className="px-8 py-2 bg-red-700 mr-5 text-md font-bold rounded-lg text-white flex items-center">Tidak Hadir</button>      
                            :
                            <button type="button" onClick={()=>handleDeletePresent(userId)} className="px-8 py-[18px] bg-green-700 mr-5 text-lg font-bold rounded-lg text-white">Hadir</button>
                            

                        }    
                            <select value={badgeId !== null ? badgeId : ''} onChange={() => handleChangeBadge(event,userId)}
                            className="mr-5 px-5 py-2 font-semibold text-lg" name="absensi" id="absensi">
                                <option value="BDQWH9VB3n9o">MVP</option>
                                <option value="zR6gNKs8xHZd">Funny</option>
                                <option value="m1ba8UfdRunk">Stop Asking</option>  
                                <option value=''>Beri Badge</option> 
                            </select>
                           
                        
                </div>
    )
}