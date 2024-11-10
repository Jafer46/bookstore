import InteractionSection from '@/components/readings/interactionSection'
import TextSection from '@/components/readings/textSection'

export default function Reading () {
  return (
    <div className='grid grid-cols-2'>
      <TextSection />
      <InteractionSection />
    </div>
  )
}
