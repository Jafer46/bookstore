import AppSidebar from '@/components/layouts/appSidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout () {
  return (
    <section className='flex relative w-full'>
      <AppSidebar />
      <main className='w-full'>
        <Outlet />
      </main>
    </section>
  )
}
