import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Reading from './pages/Reading'
import Home from './pages/Home'
import BookStore from './pages/BookStore'
import AdminHome from './pages/Admin/AdminHome'
import AddAuther from './pages/Admin/AddAuther'
import BookManager from './pages/Admin/BookManager'
import AdminLayout from './pages/Admin/Layout'
import Study from './pages/Study'
import SignIn from './pages/auth/SignIn'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'reading', element: <Reading /> },
      { path: 'store', element: <BookStore /> },
      { path: 'study', element: <Study /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: 'addauther', element: <AddAuther /> },
      { path: 'addbook', element: <BookManager /> }
    ]
  },
  {
    path: 'signin',
    element: <SignIn/>
  }
])
