import internal from 'stream'

export interface Role {
  id: number
  name: string
  description: string
  status: number
}

export interface Book {
  id?: number
  name: string
  descrition: string
  cover: string
  auther?: Auther
  category?: Category
  createdAt: Date
}

export interface Auther {
  id?: number
  name: string
}

export interface Category {
  id?: number
  name: string
  description: string
  status: number
  books?: Book[]
}
