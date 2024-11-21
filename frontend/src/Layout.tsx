import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import AppSidebar from './components/layouts/appSidebar'
import { ThemeProvider } from './providers/themeProvider'
import TopBar from './components/layouts/topbar'

export default function Layout () {
  return (
    <SidebarProvider>
      <ThemeProvider defaultTheme='dark'>
        <section className='flex relative w-full '>
          <AppSidebar />
          <div className='w-full flex flex-col'>
            <TopBar />
            <section className='w-full p-4'>
              <Outlet />
            </section>
          </div>
        </section>
      </ThemeProvider>
    </SidebarProvider>
  )
}
