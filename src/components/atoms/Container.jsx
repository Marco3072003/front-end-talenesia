export default function Container({children, className}){
    return(
        <div className={`${className} container mt-5 mx-auto px-4 sm:px-6 lg:px-8`} >
            {children}
        </div>
    )
}