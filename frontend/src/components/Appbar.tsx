import { Link } from "react-router-dom"

export const Appbar = () => {
return <div className="border-b flex justify-between px-8 py-4">
        <Link to={"/blogs"} className="flex flex-col justify-center text-xl font-semibold cursor-pointer">
            Remze
        </Link>
        <div>
            <Link to={"/publish"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6">New</button>
            </Link>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="text-md text-gray-600 dark:text-gray-300">U</span>
            </div>
        </div>
    </div>
}