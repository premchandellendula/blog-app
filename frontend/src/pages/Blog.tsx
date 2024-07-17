import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if(loading){
        return <div>
            <Appbar />
            <div className="h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <Spinner />
                </div>
            </div>
        </div> 
    }

    if (!blog) {
        return <div>No blog found.</div>;
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}