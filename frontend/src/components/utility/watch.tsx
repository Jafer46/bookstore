import React from 'react'

export default function Watch () {
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000) // Update every second
    return () => clearInterval(timer)
  }, [])

  interface DateTimeFormatOptions {
    localeMatcher?: "best fit" | "lookup" | undefined;
    weekday?: "long" | "short" | "narrow" | undefined;
    era?: "long" | "short" | "narrow" | undefined;
    year?: "numeric" | "2-digit" | undefined;
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day?: "numeric" | "2-digit" | undefined;
    hour?: "numeric" | "2-digit" | undefined;
    minute?: "numeric" | "2-digit" | undefined;
    second?: "numeric" | "2-digit" | undefined;
    timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
    formatMatcher?: "best fit" | "basic" | undefined;
    hour12?: boolean | undefined;
    timeZone?: string | undefined;
  }

  const dayOptions: DateTimeFormatOptions = {
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
        className='absolute h-24 w-[4px] bg-red-500 transition-transform duration-300 bottom-[118px]'
        style={{
          transform: `rotate(${secondRotation}deg)`,
          transformOrigin: 'bottom center',
        }}
      />
      {/* Minute Hand */}
      <div
        className='absolute h-20 w-[3px] bg-white transition-transform duration-300 bottom-[118px]'
        style={{
          transform: `rotate(${minuteRotation}deg)`,
          transformOrigin: 'bottom center'
        }}
      />
      {/* Second Hand */}
      <div
        className='absolute h-16 w-[2px] bg-white transition-transform duration-300 bottom-[118px]'
        style={{
          transform: `rotate(${hourRotation}deg)`,
          transformOrigin: 'bottom center'
        }}
      />
    </div>
  )
}
