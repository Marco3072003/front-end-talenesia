export default function Card({className, children}){
    return(
                <div className={` ${className} overflow-hidden  
                    shadow-[2px_3px_5px_0px_rgba(128,128,128,0.2),2px_-3px_5px_0px_rgba(128,128,128,0.2),-3px_-2px_5px_0px_rgba(128,128,128,0.2),-3px_2px_5px_0px_rgba(128,128,128,0.2)] 
                    rounded-lg `}>
                                    
                            {children}
                        
                </div>
    )
}