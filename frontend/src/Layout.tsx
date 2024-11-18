import { Outlet } from 'react-router-dom'
import { SidebarTrigger } from './components/ui/sidebar'
import AppSidebar from './components/layouts/appSidebar'

export default function Layout () {
  return (
    <section className='flex relative'>
      <AppSidebar />
      <SidebarTrigger />
      <Outlet />
    </section>
  )
}
