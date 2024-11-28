import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Reading from './pages/Reading'
import Home from './pages/Home'
import BookStore from './pages/BookStore'
import AdminLayout from './pages/Admin/layout'
import AdminHome from './pages/Admin/AdminHome'
import AddAuther from './pages/Admin/AddAuther'
import AddBook from './pages/Admin/AddBook'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'reading', element: <Reading /> },
      { path: 'store', element: <BookStore /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: 'addauther', element: <AddAuther /> },
      { path: 'addbook', element: <AddBook /> }
    ]
  }
])
