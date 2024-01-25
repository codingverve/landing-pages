const Button = ({label , iconUrl , backgroundColor , textColor , borderColor})=>{
    return(
        <button className={` flex justify-center items-center gap-2 border-2 px-7 py-[14px] font-montserrat leading-none text-lg ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:  "bg-coral-red text-white border-coral-red" } rounded-full`}>
            {label}
            { iconUrl && < img
            src={iconUrl}
            alt="arrow right icon"
            className=" ml-2 rounded-full w-5 h-5">
            </img>}
        </button>
    )
}

export default Button;