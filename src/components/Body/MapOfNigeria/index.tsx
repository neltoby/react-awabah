import MapImage from '@/assets/waterFrame.png'
import Img from '@/components/Socials'

const MapOfNigeria = () => {
  return (
    <>
      <div className="text-gray-800 text-lg font-semibold leading-relaxed">Geographical Distribution</div>
      <div className="mt-4">
        <Img src={MapImage} className='object-cover w-full h-full' />
      </div>
    </>
  )
}

export default MapOfNigeria