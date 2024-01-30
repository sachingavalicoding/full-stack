import Button from "../ui/Button"
import { Link } from "react-router-dom"
const SignUp = () => {
    return (
        <div className="w-full h-[40rem] grid place-items-center ">
            <div className="w-[22rem] h-[30rem] rounded-lg border-2 mx-auto mt-10 flex flex-col gap-2 px-2 py-3">
                <h3 className="font-bold text-slate-50 text-3xl text-center mt-5 "> Get on Board  </h3>
                <div className="w-full px-4 flex flex-col gap-4 my-5">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone no " />
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="w-full flex flex-col items-center gap-4 ">
                    <Button text={" Sign Up "} />
                    <p> You Already have an account ? <Link className="text-indigo-500 text-xl text-medium" to="/signin"> Sign-in  </Link>  </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp