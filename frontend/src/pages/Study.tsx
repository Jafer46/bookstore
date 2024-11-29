import { IBookGroup } from '@/components/bookstore/bookGroup'
import BookGroupGrid from '@/components/bookstore/bookGroupGird'
import AssignmentTable from '@/components/study/AssignmentTable'
const bookGroups: IBookGroup[] = [
  { groupName: 'hello' },
  { groupName: 'Bio' },
  { groupName: 'Math' }
]
export default function Study () {
  return (
    <div className='w-full'>
      <BookGroupGrid bookGroups={bookGroups} />
      <AssignmentTable />
    </div>
  )
}
