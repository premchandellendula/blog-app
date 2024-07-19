import { Link } from "react-router-dom";

interface BlogCardInputs {
    "id": string;
    "authorName": string;
    "title": string;
    "content": string;
    "publishedDate": string
}

export const LandingBlogs = ({blog}: {blog: BlogCardInputs}) => {
    return <Link to={`/sample/${blog.id}`}>
        <div className="border-b-2 border-gray-100 pb-3 p-3 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
            <Avatar name={blog.authorName} /> 
            <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
                    {blog.authorName} • 
                </div>
                <div className="pl-2 font-thin text-gray-500 text-sm flex flex-col justify-center">
                    {blog.publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {blog.title}
            </div>

            <div className="text-md font-normal">
                {blog.content.slice(0, 100) + "..."}
            </div>

            <div className="text-gray-600 text-sm font-normal pt-3">
                {`${Math.ceil(blog.content.length / 100)} mins read`}
            </div>
        </div>
    </Link>
}

export function Avatar({ name } : {name : string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-sm  text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}



// import { Appbar } from "./Appbar"

interface FullBlogProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const FullLandingBlogs = ({blog}: {blog: FullBlogProps}) => {
    return <div>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-gray-600 pt-2">
                        Posted on June 22, 2024
                    </div>
                    <div className="text-xl font-normal pt-4 text-gray-800">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-gray-700">
                        Author
                    </div>

                    <div className="flex">
                        <div className="pr-3 flex flex-col justify-center">
                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="text-md text-gray-600 dark:text-gray-300">U</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.authorName}
                            </div>
                            <div className="pt-2 text-gray-700">
                                Random sentence just to fill the desc of the author
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}