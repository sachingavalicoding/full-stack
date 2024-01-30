
import { account } from "../server/appwrite";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ID } from "appwrite";
const SignUp = () => {
    const [name, setName] = useState["w"];
    const [email, setEmail] = useState["w"];
    const [password, setPassword] = useState["w"];
    const [phone, setPhone] = useState["w"];

    const signup = () => {
        try {
            account.create(ID, email, password, name);
        } catch (e) {
            console.log(" Error Sign up ");
        }
    };
    return (
        <div className="w-full h-[40rem] grid place-items-center ">
            <div className="w-[22rem] h-[30rem] rounded-lg border-2 mx-auto mt-10 flex flex-col gap-2 px-2 py-3">
                <h3 className="font-bold text-slate-50 text-3xl text-center mt-5 ">
                    {" "}
                    Get on Board{" "}
                </h3>
                <div className="w-full px-4 flex flex-col gap-4 my-5">
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="tel"
                        placeholder="Phone no "
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="w-full flex flex-col items-center gap-4 ">
                    <button className="btn" onClick={signup}> Sign Up</button>
                    <p>
                        {" "}
                        You Already have an account ?{" "}
                        <Link className="text-indigo-500 text-xl text-medium" to="/signin">
                            {" "}
                            Sign-in{" "}
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
