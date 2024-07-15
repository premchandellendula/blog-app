import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('Authorization') || "";
  
    const token = authHeader.split(" ")[1]

    try {
        const user = await verify(token, c.env.JWT_SECRET);

        if (user) {
            c.set('jwtPayload', user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                error: "unauthorized"
            });
        }
    }catch(e){
        c.status(403);
        return c.json({
            error: "unauthorized"
        });
    }  
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const authorId = c.get('jwtPayload')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog.id
        })
    }catch(e){
        c.status(411);
        return c.json({
            err: "Invalid"
        })
    }
    
})
  
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        blogId : blog.id
    })
})
  
// Todo : add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
        const blogs = await prisma.blog.findMany()
        return c.json({
            blogs
        })
    }catch(e){
        c.status(411)
        return c.json({
            err: "Error while fetching the blog posts"
        })
    }
})
  
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const id = c.req.param("id")

    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411)
        return c.json({
            err: "Error while fetching the blog posts"
        })
    }    
})