import BookGroup, { IBookGroup } from './bookGroup'

export default function BookGroupGrid ({
  bookGroups
}: {
  bookGroups: IBookGroup[]
}) {
  return (
    <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {bookGroups?.map((bookGroup, index) => (
        <BookGroup
          key={index}
          groupName={bookGroup.groupName}
          imgUrl={bookGroup?.imgUrl}
        />
      ))}
    </div>
  )
}
