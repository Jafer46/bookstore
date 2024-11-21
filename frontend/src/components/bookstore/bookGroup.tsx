import fallBackImage from '../../assets/img/download.png'

export interface IBookGroup {
  groupName: string
  imgUrl?: string | undefined
}

export default function BookGroup ({ groupName, imgUrl }: IBookGroup) {
  const image = imgUrl ? imgUrl : fallBackImage
  return (
    <div className='w-full h-48 flex flex-col m-0 rounded-md'>
      <img
        className='h-40 w-full object-cover rounded-t-md'
        src={image}
        alt='group image'
      />
      <div className='p-2 bg-gray-400 rounded-b-md'>{groupName}</div>
    </div>
  )
}
