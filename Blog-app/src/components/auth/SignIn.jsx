import Button from "../ui/Button"

const SignIn = () => {
    return (
        <div className="w-full h-[40rem] grid place-items-center ">
            <div className="w-[22rem] h-[30rem] rounded-lg border-2 mx-auto items-center justify-center mt-10 flex flex-col gap-2 px-2 py-3">
                <h3 className="font-bold text-slate-50 text-3xl text-center mt-5 "> Hello there , welcome back   </h3>
                <div className="w-full px-4 flex flex-col gap-8 my-5">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="w-full flex flex-col items-center gap-4 ">
                    <p className=""> Forget password ?  </p>
                    <Button text={" Sign In "} />
                </div>
            </div>
        </div>
    )
}

export default SignIn