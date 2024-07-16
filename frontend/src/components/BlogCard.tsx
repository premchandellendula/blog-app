import { Link } from "react-router-dom";

interface BlogCardInputs {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCard = ({id, authorName, title, content, publishedDate}: BlogCardInputs) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b-2 border-gray-100 pb-3 p-3 max-w-screen-md cursor-pointer">
            <div className="flex">
            <Avatar name={authorName} /> 
            <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
                    {authorName} • 
                </div>
                <div className="pl-2 font-thin text-gray-500 text-sm flex flex-col justify-center">
                    {publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {title}
            </div>

            <div className="text-md font-normal">
                {content.slice(0, 100) + "..."}
            </div>

            <div className="text-gray-600 text-sm font-normal pt-3">
                {`${Math.ceil(content.length / 100)} mins read`}
            </div>
        </div>
    </Link>
}

export function Avatar({ name } : {name : string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-sm  text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}