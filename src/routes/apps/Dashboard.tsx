import Body from '@/components/Body'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

const Dashboard = () => {
  return (
    <div className="w-screen">
      <div className='grid grid-cols-5'>
        <SideBar/>
        <div className='col-start-2 col-span-4'>
          <NavBar />
          <Body />
        </div>
      </div>
    </div>
  )
}

export default Dashboard