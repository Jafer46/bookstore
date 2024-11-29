import { Calendar1, CheckSquare2, DotSquare, TagIcon } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'

export default function AssignmentTable () {
  return (
    <div className='w-full md:px-6 flex flex-col gap-y-2 mt-4'>
      <div className='font-semibold text-lg flex items-center gap-3'>
        <div className='size-3 rounded-full bg-orange-800'></div> Assinments
      </div>
      <table className='w-full'>
        <thead className='border-0 border-b-2 border-gray-500'>
          <th className='py-0 h-full'>
            <div className='w-full flex justify-start'>
              <TagIcon className='p-0 size-5' />
              Name
            </div>
          </th>
          <th>
            <div className='flex items-center justify-start'>
              <CheckSquare2 className='size-5 p-0' />
              Status
            </div>
          </th>
          <th>
            <div className='flex items-center justify-start'>
              <DotSquare className='size-5 p-0' />
              Course
            </div>
          </th>
          <th>
            <div className='flex items-center justify-start'>
              <Calendar1 className='size-5 p-0' /> Due Date
            </div>
          </th>
        </thead>
        <tbody className='p-4'>
          <td className='border-y-2 border-r-2 border-gray-500 px-2 p-y'>
            Read "historry of japan"
          </td>
          <td className='border-y-2 border-r-2 border-gray-500 px-2'>
            <div className='flex justify-center'>
              <Checkbox checked={true} />
            </div>
          </td>
          <td className='border-y-2 border-r-2 border-gray-500 px-2'>
            History and Civilization
          </td>
          <td className='border-y-2 border-gray-500 px-2'>February 28,2022</td>
        </tbody>
        <tfoot>
          <Button variant='ghost'>+ New</Button>
        </tfoot>
      </table>
    </div>
  )
}
