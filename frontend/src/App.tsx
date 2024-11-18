import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App () {
  return (
    // <>
    //   <div>
    //     {/* <Watch /> */}
    //     <Music />
    //   </div>
    // </>
    <RouterProvider router={routes} />
  )
}

export default App
