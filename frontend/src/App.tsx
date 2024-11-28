import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { getAllRolls } from './api/rollApi'

function App () {
  // console.log(getAllRolls())
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
