import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

interface FullBlogProps {
    blog: Blog
}

export const FullBlog = ({blog}: FullBlogProps) => {
    return <div>
        <Appbar />
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
                                {blog.author.name || "Anonymous"}
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