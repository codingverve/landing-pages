import { star } from "../assets/icons";

const PopularProductCard = ({ImgUrl, name , price}) =>{
    return(
        <div className=" flex flex-1 flex-col w-full max-sm:w-full">
            <img src={ImgUrl} alt={name} className=" w-[280px] h-[280px]" />
            <div className=" mt-8 flex justify-start gap-2.5 flex-col">
                <img src={star} alt="star" width={24} height={24} />
                <p className=" font-montserrat text-xl leading-normaltext-slate-gray">(4.5)</p>
                <h3 className=" mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">{price}</p>
            </div>
        </div>
        );
}

export default PopularProductCard;