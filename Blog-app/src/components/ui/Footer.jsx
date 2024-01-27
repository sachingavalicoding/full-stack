import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import FooterBtn from "./FooterBtn";
const Footer = () => {
    return (
        <div className="w-full  grid place-items-center text-slate-200 min-h-[25rem] border-2 ">
            <div className="w-[25rem]  grid place-items-center gap-9">
                <h3 className="text-2xl font-bold "> Sachin Blogs </h3>
                <p className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non sequi debitis soluta nulla minima? Dolore disi!</p>
                <div className="flex w-full gap-9 items-center justify-center text-2xl mb-5 ">
                    <FaFacebookF />
                    <FaXTwitter />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <IoLogoWhatsapp />
                </div>
                <div className="w-full flex gap-3">
                    <FooterBtn text={"Home"} />
                    <FooterBtn text={"About"} />
                    <FooterBtn text={"Contact"} />
                    <FooterBtn text={"Blog"} />
                    <FooterBtn text={"Testimonial"} />
                </div>
            </div>
        </div>
    )
}

export default Footer