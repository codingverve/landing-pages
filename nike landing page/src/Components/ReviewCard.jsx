import { star } from "../assets/icons";

const ReviewCard = ({customerName , imgUrl ,rating ,feedback})=>{
    return(
        <div className="flex max-lg:flex-col justify-center items-center flex-col">
            <img src={imgUrl} alt={customerName} className=" rounded-full object-cover w-[120px] h-[120px]" />
            <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
            <div className=" flex justify-center items-center mt-3 gap-2.5">
                <img src={star} alt="" className=" object-contain m-0" /><span className=" text-xl font-montserrat text-slate-gray">({rating})</span>
            </div>
            <h3 className="text-2xl font-bold mt-1 font-palanquin text-center">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;