import { getAllBooks } from '@/api/bookApi'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { CustomDataTable } from '@/components/utility/cutomDataTable'
import { Book } from '@/constants/dataSchemas'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { AddBookDialogue } from '../../components/bookmangment/AddBookDialogue'

const columns: ColumnDef<Book>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('status')}</div>
    )
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('name')}</div>
  },
  {
    accessorKey: 'pages',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Pages
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('pages')}</div>
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('categroy.name')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const book = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(book.id.toString())}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export default function BookManager () {
  const { isLoading, data, error } = useQuery<Book[], Error>({
    queryKey: ['books'],
    queryFn: () => getAllBooks()
  })
  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  return (
    <div className='w-full p-4'>
      <AddBookDialogue />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CustomDataTable data={data} columns={columns} />
      )}
    </div>
  )
}
