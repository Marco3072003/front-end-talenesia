import landingPageImage from '../../assets/img/landing-page.jpg'
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";




export default function LandingPage(){
    
    return(
        <>   
            <div className="w-screen max-[400px]:h-[88%] min-width:[100px]: pb-10 max-width[400px]:pb-10 sm:h-[88%] max-[600px]:block max-[600px]:pl-24 max-[500px]:pl-10 flex justify-center items-center mt-3 gap-10">      
                <div className="block lg:flex flex-col w-3/4 lg:w-[40%] lg:h-full gap-3 justify-center">
                    <div className="w-full text-sky-900 text-[40px] min-[1040px]:text-[58px] font-medium font-['Outfit']  ">LMS Talenesia</div>
                    <div className="mb-2 w-full text-teal-700 text-[25px] font-medium font-['Outfit'] leading-[40px] ">Selamat datang di platform belajar kami yang inovatif! Kami menawarkan kelas intensif dalam administrasi perkantoran, manajemen HRGA, dan web & pemrograman untuk membantu Anda mencapai kesuksesan karir. Materi terkini, disusun oleh ahli, disajikan dengan metode terbaik, dan disertai dengan pengalaman belajar interaktif. Bergabunglah dengan kami hari ini dan siapkan diri untuk kesuksesan.</div>
                    <Link to='/course'>
                    <Button className="w-[145px] h-[50px]  bg-sky-900 rounded-[999px] text-white 
                                       text-[15px] font-bold shrink-0 hover:-translate-y-1 hover:shadow-[0_4px_5px_0px_rgba(0,0,0,0.5)]
                                       active:translate-y-1 active:shadow-[inset_0_10px_4px_0_rgba(0,0,0,0.25)]
                                       transition-all duration-200" 
                            label="Kursus Tersedia" type='button'/>
                    </Link>
                </div>
                <img className="max-[1040px]:hidden block w-[35%]" src={landingPageImage} />
            </div>
        </>

    )
}