import z from 'zod';

export const singupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof singupInput>

export const singinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SigninInput = z.infer<typeof singinInput>


export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogInput = z.infer<typeof createBlogInput>


export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>