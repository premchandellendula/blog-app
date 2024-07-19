// import { LandingAppbar } from "../components/LandingAppbar"

// export const Landing = () => {
//     return <div>
//         <LandingAppbar />
//     </div>
// }


import { LandingAppbar } from "../components/LandingAppbar";
import { LandingBlogs } from "../components/LandingBlogs";

export const Landing = () => {
    // const {loading, blogs} = useBlogs();

    // if(loading){
    //     return <div>
    //         <LandingAppbar />
    //         <div className="flex justify-center">
    //             <div>
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //             </div>
    //         </div>
    //     </div>
    // }

    return <div>
        <LandingAppbar />
        <div className="flex justify-center">
            <div className="flex flex-col justify-center">
                {/* {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} authorName={blog.author.name || "Anonymous User"} title={blog.title} content={blog.content} publishedDate={"22 Jun, 2024"} />)} */}
                
                {/* <BlogCard key={"22"} id={"22"} authorName={"Anonymous User"} title={"This is a sample title"} content={"This is a sample content for the above title which was provided the great ksfkjkjf"} publishedDate={"22 Jun, 2024"} /> */}

                <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            
            </div>
        </div>
    </div>
    
}