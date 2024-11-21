import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Reading from './pages/Reading'
import Home from './pages/Home'
import BookStore from './pages/BookStore'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'reading', element: <Reading /> },
      { path: 'store', element: <BookStore /> }
    ]
  }
])
