import { z } from 'zod'

export const BookformSchema = z.object({
  name: z.string().min(2, {
    message: 'user must be at least two characters.'
  }),
  descritpion: z.string().email('invalid email address'),
  cover: z.string(),
  autherId: z.number(),
  categoryId: z.number(),
  createdAt: z.date()
})

export const AutherformSchema = z.object({
  name: z.string().min(3, {
    message: 'auther name must be greater than 2 charcters'
  })
})

export const LoginSchema = z.object({
  username: z.string().min(3, {
    message: 'auther name must be greater than 2 charcters'
  }),
  email: z.string().email(),
  password: z.string().min(8,{
    message: 'password must be at least 8 characters'
  }).max(16, {
    message: 'password must be at less than 16 characters'
  })
})
