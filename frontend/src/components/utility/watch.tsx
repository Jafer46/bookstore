import React, { useEffect, useState } from 'react'

export default function Watch () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000) // Update every second
    return () => clearInterval(timer)
  }, [])

  const dayOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('en-US', dayOptions)

  const hour = date.getHours() % 12 // Get hour in 12-hour format
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const hourRotation = (360 / 12) * hour + (minute / 60) * (360 / 12)
  const minuteRotation = (360 / 60) * minute + (second / 60) * (360 / 60)
  const secondRotation = (360 / 60) * second

  return (
    <div className='w-60 h-60 p-4 bg-black text-white rounded-full flex justify-center relative'>
      <div className='flex flex-col h-52 justify-end'>
        <div>{date.toLocaleTimeString()}</div>
        <div className='flex justify-center'>{formattedDate}</div>
      </div>
      {/* Hour Hand */}
      <div
        className='absolute h-24 w-[4px] bg-red-500 transition-transform duration-300'
        style={{
          transform: `rotate(${hourRotation}deg)`,
          transformOrigin: 'bottom center'
        }}
      />
      {/* Minute Hand */}
      <div
        className='absolute h-20 w-[3px] bg-white transition-transform duration-300'
        style={{
          transform: `rotate(${minuteRotation}deg)`,
          transformOrigin: 'bottom center'
        }}
      />
      {/* Second Hand */}
      <div
        className='absolute h-16 w-[2px] bg-white transition-transform duration-300'
        style={{
          transform: `rotate(${secondRotation}deg)`,
          transformOrigin: 'bottom center'
        }}
      />
    </div>
  )
}
