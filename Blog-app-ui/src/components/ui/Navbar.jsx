import { FaUsersCog } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
const Navbar = () => {
    return (
        <div className=" w-full fixed top-0 left-0 bg-black h-[4rem] px-3 grid place-items-center text-slate-50">
            <div className="container flex items-center justify-between ">
                <h2 className="text-center font-bold text-xl  text-slate-50 shadow-lg">  Sachin Blog </h2>
                <nav className=" flex gap-8 font-medium  text-slate-300 ">
                    <a href="home"> Home </a>
                    <a href="blogs"> blogs </a>
                    <a href="blogs"> About </a>
                    <a href="blogs"> Recent blog  </a>
                    <a href="blogs"> Tesitmonial </a>
                </nav>
                <div className="flex gap-8 ">
                    <FaUsersCog className="text-2xl " />
                    <MdOutlineAddCircleOutline className="text-2xl " />
                </div>
            </div>
        </div>
    )
}

export default Navbar