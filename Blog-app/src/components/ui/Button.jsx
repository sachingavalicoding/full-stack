

// eslint-disable-next-line react/prop-types
const Button = ({ text, color, bgColor }) => {
    return (
        <button className={`${color} ${bgColor} font-medium border-[1px]  border-red-500  rounded-md text-red-500 cursor-pointer px-2 py-2 text-[0.8rem] hover:bg-red-500  bg-transparent hover:text-slate-50 md:text-[1rem] `}> {text} </button>
    )
}

export default Button