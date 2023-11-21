

export default function BannerAbsensiContent({absensi}){
    return(
                    <div className="bg-green-600 w-[150px] flex justify-center py-2 rounded-md">
                        <h1 className="text-white text-xl font-semibold">Absensi {absensi}</h1>
                    </div>
    )
}