import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function SubCourseContent({courseId, imgUrl, judulSubcourse, tipeSubcourse, link, opened, due, subCourseId}){
    const role = useSelector((state)=> state.auth.role)
    return      role == 'MENTOR' && tipeSubcourse == 'LIVESESSION' ?
                    <Link to={`/meeting/${courseId}/${subCourseId}`}>
                    <div className="border rounded-[10px] border-stone-300 py-5 px-10 flex justify-between items-center">
                        <div className="flex gap-5">
                            <div className={`${tipeSubcourse == 'Link' || tipeSubcourse == 'Video' ? 'bg-gray-300' :
                                                tipeSubcourse=='File'? 'bg-blue-200': tipeSubcourse == 'Assignment' ? 'bg-orange-200' :
                                                'bg-gray-300'} rounded-lg w-[60px] py-2 flex items-center justify-center`}> 
                                <img className="w-[50px] h-[45px] rounded-lg" src={imgUrl} alt="" />
                            </div>
                            <div>
                                <h1>{tipeSubcourse}</h1>
                                <h1 className="text-orange-600 font-semibold text-2xl text-['Roboto']">{judulSubcourse}</h1>
                            </div>
                        </div>
                        <div>
                        
                            { opened  &&
                            <h1 className="text-neutral-500 font-bold text-lg">{opened} - {due}</h1>
                
                            }
                        </div>
                    </div>
                </Link>     : 

                <Link to={link}>
                    <div className="border rounded-[10px] border-stone-300 py-5 px-10 flex justify-between items-center">
                        <div className="flex gap-5">
                            <div className={`${tipeSubcourse == 'Link' || tipeSubcourse == 'Video' ? 'bg-gray-300' :
                                                tipeSubcourse=='File'? 'bg-blue-200': tipeSubcourse == 'Assignment' ? 'bg-orange-200' :
                                                'bg-gray-300'} rounded-lg w-[60px] py-2 flex items-center justify-center`}> 
                                <img className="w-[50px] h-[45px] rounded-lg" src={imgUrl} alt="" />
                            </div>
                            <div>
                                <h1>{tipeSubcourse}</h1>
                                <h1 className="text-orange-600 font-semibold text-2xl text-['Roboto']">{judulSubcourse}</h1>
                            </div>
                        </div>
                        <div>
                        
                            { opened  &&
                            <h1 className="text-neutral-500 font-bold text-lg">{opened} - {due}</h1>
                
                            }
                        </div>
                    </div>
                </Link> 
                
                
    
}