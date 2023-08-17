import DistributionImage from '@/assets/Distribution.png'
import Img from '@/components/Socials'
import Man from '@/assets/man.png'
import Woman from '@/assets/woman.png'
import NameAvatar from '../NameAvatar'

const avatarArr = [
  'Olamide Olagunju',
  'Precious Isioma',
  'Tunde Ugochukwu',
  'Henrietta Gift'
]

const Distribution = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-2 gap-y-4'>
      <div className="rounded-md border border-solid border-gray-200 p-[0.75rem]">
        <div className="text-neutral-500 text-xs font-semibold leading-none">Gender Distribution</div>
        <div className="flex justify-center mt-4"><Img src={DistributionImage} /></div>
        <div className="mt-2 grid grid-cols-6">
          <div className="col-start-2 col-span-2 flex">
            <Img src={Man} className='w-[1.2rem] h-[1.2rem]' />
            <span className="text-neutral-700 text-sm font-medium leading-tight">Male</span>
          </div>
          <div className="col-start-4 col-span-2 flex">
            <Img src={Woman} className='w-[1.2rem] h-[1.2rem]' />
            <span className="text-neutral-700 text-sm font-medium leading-tight">Female</span>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-solid border-gray-200 p-[0.75rem]">
        <div className="text-neutral-500 text-sm font-medium leading-tight">Top Customers This Week</div>
        {avatarArr.map((item, i) => (
          <NameAvatar index={i} str={item} />
        ))}
      </div>
    </div>
  )
}

export default Distribution