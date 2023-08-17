import Adornment from '@/assets/Adornment.png'
import Setting from '@/assets/Setting.png'
import Logout from '@/assets/Logout.png'
import CustomNavLink from '@/components/NavLink'
import Img from '@/components/Socials'

const SideBar = () => {
  return (
    <div className='col-start-1 col-span-1 h-screen border border-solid border-gray-200'>
      <div className='font-bold flex justify-center text-3xl leading-8 mt-6 text-justify text-green-900'>
        Valubah
      </div>
      <div className='grid grid-cols-1 grid-rows-6 mt-20'>
        <div className='row-start-1 row-span-5 px-8'>
          <CustomNavLink label='Dashboard' to='/dashboard' icon={<Img src={Adornment} />} />
        </div>
        <div className='row-start-6 row-span-1 px-8'>
          <CustomNavLink label='Settings' to='/setting' icon={<Img src={Setting} />} />
          <div className='my-6'>
            <CustomNavLink label='Log Out' to='/logout' icon={<Img src={Logout} />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar