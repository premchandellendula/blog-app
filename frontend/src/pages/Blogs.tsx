import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="flex flex-col justify-center">
                {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name || "Anonymous User"} title={blog.title} content={blog.content} publishedDate={"22 Jun, 2024"} />)}
                
                {/* <BlogCard key={"22"} id={"22"} authorName={"Anonymous User"} title={"This is a sample title"} content={"This is a sample content for the above title which was provided the great ksfkjkjf"} publishedDate={"22 Jun, 2024"} /> */}
            </div>
        </div>
    </div>
    
}