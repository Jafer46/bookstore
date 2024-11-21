import { Input } from '../ui/input'
import { SidebarTrigger } from '../ui/sidebar'
import { CustomBreadcrumb } from './customBreadCrumb'
import { ModeToggle } from './mod-toggle'
import { UserAvatar } from './userAvatar'

export default function TopBar () {
  return (
    <div className='flex justify-between items-center p-2 gap-2'>
      <SidebarTrigger />
      {/* <CustomBreadcrumb /> */}
      <Input />
      <UserAvatar />
      <ModeToggle />
    </div>
  )
}
