import MusicCard from './musicCard'
import MusicHeader from './musicHeader'

export default function Music () {
  return (
    <div className='h-[500px] w-[200px] bg-slate-400 rounded-lg m-4'>
      <MusicHeader />
      <MusicCard />
    </div>
  )
}
