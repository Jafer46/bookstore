import { Outlet } from 'react-router-dom'
import AppSidebar from './components/layouts/appSidebar'
import TopBar from './components/layouts/topbar'

export default function Layout () {
  return (
    <section className='flex relative w-full '>
      <AppSidebar />
      <div className='w-full flex flex-col'>
        <TopBar />
        <section className='w-full p-4'>
          <Outlet />
        </section>
      </div>
    </section>
  )
}
