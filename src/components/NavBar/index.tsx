import Notifications from '@/assets/Notifications.png'
import Expandmore from '@/assets/Expandmore.png'
import Img from '../Socials'

const NavBar = () => {
  return (
    <div className='grid grid-cols-10 border-b border-solid border-gray-200 py-4 px-8'>
      <div className='grid-start-1 col-span-1 text-lg font-semibold flex items-center leading-relaxed'>
        Dashboard
      </div>
      <div className='grid-start-2 col-span-8'></div>
      <div className='grid-start-10 col-span-1 flex justify-between items-center'>
        <Img src={Notifications} />
        <span className='rounded-full text-green-900 bg-green-100 p-2 text-base font-bold leading-normal'>AD</span>
        <Img src={Expandmore} />
      </div>
    </div>
  )
}

export default NavBar