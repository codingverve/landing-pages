const Button = ({label , iconUrl})=>{
    return(
        <button className=" flex justify-center items-center gap-2 border-2 px-7 py-[14px] font-montserrat leading-none text-lg bg-coral-red rounded-full border-coral-red text-white">
            {label}
            <img
            src={iconUrl}
            alt="arrow right icon"
            className=" ml-2 rounded-full w-5 h-5">
            </img>
        </button>
    )
}

export default Button;