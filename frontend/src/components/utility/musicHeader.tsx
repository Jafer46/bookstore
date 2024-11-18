import { LucideDownload, Play } from 'lucide-react'
import image from '../../assets/img/download.png'

export default function MusicHeader () {
  return (
    <div className='w-full h-[180px] flex flex-col p-2 bg-yellow-300 rounded-t-lg'>
      <div className='h-full flex gap-2'>
        <img
          className='w-[50%] rounded-lg overflow-hidden object-cover'
          src={image}
          alt='music image'
        />
        <div className='overflow-hidden flex flex-col gap-1'>
          <div>Title</div>
          <div>Description</div>
          <div className='flex gap-1 items-center'>
            <LucideDownload className='size-5 p-1 rounded-full border border-black' />
            <div>Save</div>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        preview{' '}
        <Play
          className='bg-white rounded-full size-10 p-1 border shadow-md shadow-orange-950
        '
        />
      </div>
    </div>
  )
}
