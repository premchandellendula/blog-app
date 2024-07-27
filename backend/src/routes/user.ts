import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { singupInput, singinInput } from "@premchandellendula/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

// signup

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    const { success } = singupInput.safeParse(body)

    if(!success){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      })
    }
    try{
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      })
    
      const token = await sign({ id: user.id}, c.env.JWT_SECRET)
      return c.json({
        jwt: token
      })
    }catch(e){
      c.status(411)
      return c.text("Invalid user")
    }
    
})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = singinInput.safeParse(body)

    if(!success){
      c.status(411);
      return c.json({
        message: "Incorrect inputs"
      })
    }
  
    try{
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })
    
      if(!user){
        c.status(403);
        return c.json({
          error: "user not found"
        })
      }
    
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      // console.log(token)
      return c.json({
        jwt: token
      })
    }catch(e){
      c.status(411)
      c.text("Invalid user")
    }    
})