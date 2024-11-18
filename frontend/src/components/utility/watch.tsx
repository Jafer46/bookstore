const day = {
  1: 'Monday',
  2: 'Tusday',
  6: 'Saturday'
}

export default function Watch () {
  const date = new Date(Date.now())
  const number = date.getDay()
  const dat = day[1]
  const arr = [0, 2, 4, 6, 8]

  return (
    <div className='w-60 h-60 p-4 bg-black text-white rounded-full flex justify-center relative'>
      <div className='flex flex-col h-52 justify-end'>
        <div>{date.toLocaleTimeString()}</div>
        <div className='flex justify-center'>{dat}</div>
      </div>
      {arr.map(n => {
        const str = (15 * n).toString()
        console.log(str)
        return (
          <div
            className={`absolute h-52 w-[1px] bg-white rotate-[${str}deg]`}
          />
        )
      })}
      {/* <div className={`absolute h-52 w-[1px] bg-white rotate-[0deg]`} />
      <div className={`absolute h-52 w-[1px] bg-white rotate-[15deg]`} />
      <div className={`absolute h-52 w-[1px] bg-white rotate-[30deg]`} />
      <div className={`absolute h-52 w-[1px] bg-white rotate-[45deg]`} />
      <div className={`absolute h-52 w-[1px] bg-white rotate-[60deg]`} />
      <div className={`absolute h-52 w-[1px] bg-white rotate-[90deg]`} /> */}
    </div>
  )
}
