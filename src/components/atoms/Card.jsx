export default function Card({className, children}){
    return(
                <div className={` ${className} overflow-hidden  
                    shadow-[0_15px_20px_-10px_rgba(0,0,0,0.3),0_-15px_20px_-20px_rgba(0,0,0,0.3)] 
                    rounded-lg `}>
                                    
                            {children}
                        
                </div>
    )
}