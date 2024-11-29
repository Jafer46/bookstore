export interface Role {
  id: number
  name: string
  description: string
  status: number
}

export interface Book {
  id: number
  name: string
  descrition: string
  cover: string
  auther?: Auther
  pages: number
  status: number
  category?: Category
  uploadedBy: User
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

export interface User {
  id?: number
  username: string
  email: string
  password: string
  status: number
  role?: Role
  books?: Book[]
  schedules?: Schedule[]
  bookmarkGroups?: BookmarkGroup[]
}

export interface Schedule {
  id?: number
  user?: User
  sheduledFor: Date
  note?: string
}

export interface BookmarkGroup {}
