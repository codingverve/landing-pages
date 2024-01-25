import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = ()=>{
    return(
        <footer className=" max-container">
            <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
                <div className=" flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="footer Logo"
                        height={46}
                        width={150} />
                    </a>
                    <p className="text-white mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
                    Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className=" flex gap-5 items-center mt-8">
                        {socialMedia.map((icons)=>(
                            <div className="flex justify-center items-center w-12 h-12  bg-white rounded-full">
                                <img src={icons.src} alt={icons.alt}
                                width={24}
                                height={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section)=>(
                        <div key={section}>
                            <h4 className="text-white font-montserrat text-xl font-medium mb-6">{section.title}</h4>
                            <ul>
                                {section.links.map((items)=>(
                                    <li className="text-white-400 leading-normal mt-3 text-base hover:text-slate-gray cursor-pointer" key={items.name}>
                                        <a>{items.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyrigt sign" height={20} width={20} className="rounded-full m-0"/>
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className=" font-montserrat cursor-pointer">Terms & Condition </p>
            </div>
        </footer>
    )
}

export default Footer;