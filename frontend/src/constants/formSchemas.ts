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
