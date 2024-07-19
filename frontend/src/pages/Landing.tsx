// import { LandingAppbar } from "../components/LandingAppbar"

// export const Landing = () => {
//     return <div>
//         <LandingAppbar />
//     </div>
// }


import { useState } from "react";
import { LandingAppbar } from "../components/LandingAppbar";
import { LandingBlogs } from "../components/LandingBlogs";

export const Landing = () => {
    const [blogs, setBlogs] = useState([
        {
            id: "1",
            authorName: "Prahladh",
            title: "A detailed blog on Web Dev roadmap",
            content: "This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too",
            publishedDate: "22 Jun, 2024"
        },
        {
            id: "2",
            authorName: "Prahladh",
            title: "A detailed blog on Web Dev roadmap",
            content: "This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too",
            publishedDate: "22 Jun, 2024"
        },
        {
            id: "3",
            authorName: "Prahladh",
            title: "A detailed blog on Web Dev roadmap",
            content: "This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too",
            publishedDate: "22 Jun, 2024"
        },
        {
            id: "4",
            authorName: "Prahladh",
            title: "A detailed blog on Web Dev roadmap",
            content: "This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too",
            publishedDate: "22 Jun, 2024"
        },
        {
            id: "5",
            authorName: "Prahladh",
            title: "A detailed blog on Web Dev roadmap",
            content: "This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too",
            publishedDate: "22 Jun, 2024"
        }

    ])
    return <div>
        <LandingAppbar />
        <div className="flex justify-center">
            <div className="flex flex-col justify-center">
                {blogs.map(blog => <LandingBlogs key={blog.id} blog={blog}/>)}
                
                {/* <BlogCard key={"22"} id={"22"} authorName={"Anonymous User"} title={"This is a sample title"} content={"This is a sample content for the above title which was provided the great ksfkjkjf"} publishedDate={"22 Jun, 2024"} /> */}

                {/* <LandingBlogs key={"1"} id={"1"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"2"} id={"2"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"3"} id={"3"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"4"} id={"4"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />            

                <LandingBlogs key={"5"} id={"5"} authorName={"Prahladh"} title={"A detailed blog on Web Dev roadmap"} content={"This is a detailed blog on the web dev roadmap using MERN stack, and includes jwt authentication and cloudflares workers too"} publishedDate={"22 Jun, 2024"} />             */}
            </div>
        </div>
    </div>
    
}