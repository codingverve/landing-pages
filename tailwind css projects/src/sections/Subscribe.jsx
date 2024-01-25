import Button from "../Components/button";

const Subscribe = ()=>{
    return(
        <section className="max-container flex justify-center items-center max-lg:flex-col gap-10" id="Contact Us">
            <h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"> Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
            <div className="lg:max-w-[40%] w-full flex items-center justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" placeholder="Subscribe@nike.com"/>
                <div className=" flex max-sm:justify-end items-center max-sm:w-full">
                <Button label="Sign Up" fullwidth></Button> </div>
            </div>
        </section>
    )
}

export default Subscribe;