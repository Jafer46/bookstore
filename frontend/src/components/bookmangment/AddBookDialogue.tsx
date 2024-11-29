import * as React from 'react'

import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AddBookForm from './AddBook'

export function AddBookDialogue () {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline'>Create</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
            <DialogDescription>
              Add the values to create a new book
            </DialogDescription>
          </DialogHeader>
          <AddBookForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Create</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Add Book</DrawerTitle>
          <DrawerDescription>
            Add the values to create a new book
          </DrawerDescription>
        </DrawerHeader>
        <AddBookForm />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm ({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' defaultValue='shadcn@example.com' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' defaultValue='@shadcn' />
      </div>
      <Button type='submit'>Save changes</Button>
    </form>
  )
}
