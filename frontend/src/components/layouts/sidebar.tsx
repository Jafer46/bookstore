import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import useAuth from '@/store/authstore'
import { useMediaQuery } from '@uidotdev/usehooks'
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
  Users2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getGuestRoutes, getRoutes } from '@/api/routesApi'
import { Route } from '@/constants/schema'

export default function Sidebar () {
  const isMobile = useMediaQuery(
    'only screen and (max-width : 768px) and (min-width : 640px)'
  )

  const { token } = useAuth()
  let routes: Route[] | undefined
  if (token == '') {
    const { data } = useQuery({
      queryKey: ['routes'],
      queryFn: () => getGuestRoutes()
    })
    routes = data
  } else {
    const { data } = useQuery({
      queryKey: ['routes'],
      queryFn: () => getRoutes(token)
    })
    routes = data
  }

  if (isMobile) {
    return (
      <aside className='fixed inset-y-0 left-0 z-10 w-14 flex-col border-r flex rounded-xl border bg-card text-card-foreground shadow ml-2 my-2'>
        <nav className='flex flex-col items-center gap-4 px-2 py-4'>
          <Link
            to='#'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
          >
            <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          {routes?.map(route => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={route.path}
                    className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                  >
                    <Home className='h-5 w-5' />
                    <span className='sr-only'>{route.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{route.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <ShoppingCart className='h-5 w-5' />
                  <span className='sr-only'>Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Orders</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Package className='h-5 w-5' />
                  <span className='sr-only'>Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Products</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Users2 className='h-5 w-5' />
                  <span className='sr-only'>Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Customers</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <LineChart className='h-5 w-5' />
                  <span className='sr-only'>Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Settings className='h-5 w-5' />
                  <span className='sr-only'>Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    )
  }
  return (
    <div className='hidden border-r md:block rounded-xl border bg-card text-card-foreground shadow ml-2 my-2'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 '>
          <Link to='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>Acme Inc</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />

            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              to='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Home className='h-4 w-4' />
              Dashboard
            </Link>
            <Link
              to='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <ShoppingCart className='h-4 w-4' />
              Orders
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                6
              </Badge>
            </Link>
            <Link
              to='#'
              className='flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
            >
              <Package className='h-4 w-4' />
              Products{' '}
            </Link>
            <Link
              to='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Users className='h-4 w-4' />
              Customers
            </Link>
            <Link
              to='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <LineChart className='h-4 w-4' />
              Analytics
            </Link>
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Link
            to='#'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
          >
            <Settings className='h-4 w-4' />
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}
