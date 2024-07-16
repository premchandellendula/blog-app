import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div className="flex justify-center">
        <div className="flex flex-col justify-center max-w-xl">
            <BlogCard authorName="Premchand" title="This is my blog about the new game in the town" content="This game is a new horror and challenging game, which has good animations" publishedDate="Jun 22, 2024" />

            <BlogCard authorName="Premchand" title="This is my blog about the new game in the town" content="This game is a new horror and challenging game, which has good animations" publishedDate="Jun 22, 2024" />

            <BlogCard authorName="Premchand" title="This is my blog about the new game in the town" content="This game is a new horror and challenging game, which has good animations" publishedDate="Jun 22, 2024" />

            <BlogCard authorName="Premchand" title="This is my blog about the new game in the town" content="This game is a new horror and challenging game, which has good animations" publishedDate="Jun 22, 2024" />

        </div>
    </div>
    
}