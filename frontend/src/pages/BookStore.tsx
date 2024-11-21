import { IBookGroup } from '@/components/bookstore/bookGroup'
import BookGroupGrid from '@/components/bookstore/bookGroupGird'

const bookGroups: IBookGroup[] = [
  { groupName: 'hello' },
  { groupName: 'Bio' },
  { groupName: 'Math' }
]

export default function BookStore () {
  return <BookGroupGrid bookGroups={bookGroups} />
}
