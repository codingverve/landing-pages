import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
const Nav = ()=>{
    return(
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                     src={headerLogo}
                     alt="Logo"
                     width={130}
                     height={29}></img>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((list)=>(
                        <li key={list.label}>
                            <a
                                href={list.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray">

                            {list.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className=" hidden max-lg:block">
                    <img src={hamburger}
                    alt="hamburger"
                    width={25}
                    height={25}></img>
                </div>
            </nav>
        </header>
    )
} 
export default Nav;