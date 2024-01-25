const ShoeCard =({imgUrl , changeBigShoeImage , bigShoeImage})=>{

    const handleCLick =()=>{
        if(bigShoeImage!== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return(
        <div className={`border-2 rounded-xl ${bigShoeImage===imgUrl.bigShoe ? `border-coral-red` : `border-transparent`} cursor-pointer max-sm:flex-1 `} onClick={handleCLick}>
            <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40
            h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt=" shoe Collection" width={127} height={103} /></div></div>
    )
}

export default ShoeCard;