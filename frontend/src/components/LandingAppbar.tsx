import { Link } from "react-router-dom"

export const LandingAppbar = () => {
return <div className="border-b flex justify-between px-8 py-4">
        <Link to={"/blogs"} className="flex flex-col justify-center text-xl font-semibold cursor-pointer">
            Remze
        </Link>
        <div>
            <Link to={"/signup"}>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-950 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6">Sign Up</button>
            </Link>
            <Link to={"/signin"}>
                <button type="button" className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6">Sign in</button>
            </Link>
        </div>
    </div>
}