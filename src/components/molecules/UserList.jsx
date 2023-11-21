export default function UserList({userPicture, username}){
    return(        
                <div className="flex gap-5 items-center border-b-2 pb-3 mr-12 mb-5">
                    <img className="h-[50px] rounded-full"src={userPicture} alt="" />
                    <h1 className="text-2xl font-semibold">{username}</h1>
                </div>
                        
    )
}