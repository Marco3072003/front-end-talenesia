import Navbar from "../../components/organisms/Navbar";
import AdminImage from "../../assets/img/admin-perkantoran.png"
import InterviewImage from "../../assets/img/latihan-interview.png"
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Container from "../../components/atoms/Container";
import { useState } from "react";
import { Navigate} from "react-router-dom";

export default function CoursePage(){

    const [isShowId, setIsShowId] = useState('');
    const showCardHeight = "h-[58%]";
    function handleShow(event){
        const id = event.target.id;
        isShowId === id ? setIsShowId('') : setIsShowId(id)
        
    }

    return(
        <>    
            <Container>
                <h1 className="text-sky-900 text-[28px] mb-8 font-medium font-['Outfit']">KURSUS YANG TERSEDIA</h1>
                    <Card id='1' className={`w-full h-[38%] mb-10 py-8 px-16 ${isShowId === '1'  && showCardHeight}` }>
                        <img src={AdminImage} alt="course-picture" className="h-[150px] mb-5" />
                        <h2 className="text-sky-900 mb-2 font-medium font-['Outfit'] text-2xl">Kelas Intensif Admin Perkantoran</h2>
                        <p className="text-xl"> 
                            Kelas Intensif Admin Perkantoran adalah pelatihan kerja secara daring (online) dalam bidang general administrasi perkantoran (Admin GA). 
                            Dalam pelatihan ini, materi yang akan dipelajari adalah:
                        </p>
                        <ol className={`${!(isShowId === '1') && 'hidden'} list-disc translate-x-10 text-xl`}>
                            <li>Microsoft Office (Word, Excel, Powerpoint)</li>
                            <li>Google Workspace (Docs, Sheet, Slide, Jamboard, Meet, Drive)</li>
                            <li>Pengelolaan kas kecil dan reimbursement</li>
                            <li>Laporan, surat-menyurat, dan arsip (rekap data, email, data entry, dll.)</li>
                            <li>Pengadaan dan pengelolaan fasilitas kantor</li>
                            <li>Keterampilan Pendukung Human Resource (rekrutmen, BPJS, acara kantor)</li>
                            <li>Persiapan kerja sebagai admin: pencarian lowongan, pembuatan CV/resume, praktik interview</li>
                        </ol>
                        
                        <div className="flex justify-end mt-8 text-sky-900 font-['Roboto'] font-medium">
                            <Button label={isShowId === '1' ? 'SHOW LESS' : 'SHOW MORE'} id='1' className="" onClick={handleShow} type='button'/>
                        </div>
                    </Card>
                    <Card id='2' className={`w-full h-[38%] mb-10 py-8 px-16 ${isShowId === '2'  && showCardHeight} ` }>
                        <img src={InterviewImage} alt="course-picture" className="h-[150px] mb-5" />
                        <h2 className="text-sky-900 mb-2 font-medium font-['Outfit'] text-2xl">Kelas Intensif Admin HRGA</h2>
                        <p className="text-xl"> 
                            Kelas Intensif Admin Perkantoran adalah pelatihan kerja secara daring (online) dalam bidang general administrasi perkantoran (Admin GA). 
                            Dalam pelatihan ini, materi yang akan dipelajari adalah:
                        </p>
                        <ol className={`${!(isShowId === '2') && 'hidden'} list-disc translate-x-10 text-xl`}>
                                <li>Microsoft Office (Word, Excel, Powerpoint)</li>
                                <li>Google Workspace (Docs, Sheet, Slide, Jamboard, Meet, Drive)</li>
                                <li>Pengelolaan kas kecil dan reimbursement</li>
                                <li>Laporan, surat-menyurat, dan arsip (rekap data, email, data entry, dll.)</li>
                                <li>Pengadaan dan pengelolaan fasilitas kantor</li>
                                <li>Keterampilan Pendukung Human Resource (rekrutmen, BPJS, acara kantor)</li>
                                <li>Persiapan kerja sebagai admin: pencarian lowongan, pembuatan CV/resume, praktik interview</li>
                            </ol>
                        <div className="flex justify-end mt-8 text-sky-900 font-['Roboto'] font-medium">
                            <Button label={isShowId === '2' ? 'SHOW LESS' : 'SHOW MORE'} id='2' className="" onClick={handleShow} type='button'/>
                        </div>
                    </Card>
                    <Card id='3' className={`w-full h-[38%] mb-10 py-8 px-16 ${isShowId === '3'  && showCardHeight} ` }>
                        <img src={AdminImage} alt="course-picture" className="h-[150px] mb-5" />
                        <h2 className="text-sky-900 mb-2 font-medium font-['Outfit'] text-2xl">Kelas Intensif Fullstack Developer</h2>
                        <p className="text-xl"> 
                            Kelas Intensif Admin Perkantoran adalah pelatihan kerja secara daring (online) dalam bidang general administrasi perkantoran (Admin GA). 
                            Dalam pelatihan ini, materi yang akan dipelajari adalah:
                        </p>
                        <ol className={`${!(isShowId === '3') && 'hidden'} list-disc translate-x-10 text-xl`}>
                                <li>Microsoft Office (Word, Excel, Powerpoint)</li>
                                <li>Google Workspace (Docs, Sheet, Slide, Jamboard, Meet, Drive)</li>
                                <li>Pengelolaan kas kecil dan reimbursement</li>
                                <li>Laporan, surat-menyurat, dan arsip (rekap data, email, data entry, dll.)</li>
                                <li>Pengadaan dan pengelolaan fasilitas kantor</li>
                                <li>Keterampilan Pendukung Human Resource (rekrutmen, BPJS, acara kantor)</li>
                                <li>Persiapan kerja sebagai admin: pencarian lowongan, pembuatan CV/resume, praktik interview</li>
                            </ol>
                        <div className="flex justify-end mt-8 text-sky-900 font-['Roboto'] font-medium">
                            <Button label={isShowId === '3' ? 'SHOW LESS' : 'SHOW MORE'} id='3' className="" onClick={handleShow} type='button'/>
                        </div>
                    </Card>
            </Container>
        </>
    )
}