import { FC } from 'react';

import User from '@/assets/User.png'
import Img from '@/components/Socials'
import Lineup from '@/assets/Lineup.png'
import Linedown from '@/assets/Linedown.png'

type CardInfoProp = {
  header: string;
  count: number;
  profit?: boolean;
  percents: number;
}

const CardInfo: FC<CardInfoProp> = ({ header, count, profit = true, percents }) => {
  return (
    <div className='col-span-1 border border-solid border-gray-200 rounded-md p-[0.75rem]'>
      <div>
        <Img src={User} className='p-[5px] border border-solid border-gray-200 rounded-md' />
        <p className='truncate mt-4 text-neutral-700 text-sm font-medium leading-tight'>{header}</p>
        <div className='grid grid-cols-5'>
          <div className='col-start-1 col-span-4 mt-4 flex items-end text-neutral-700 text-2xl font-semibold leading-7'>
            {count}k
          </div>
          <div className='col-start-6 col-span-1 flex items-end'>
            <div className='p-[3px] rounded-full inline-flex items-center text-green-900 bg-green-100'>
              <Img className='w-[7px] h-[7px]' src={profit ? Lineup : Linedown} /> 
              <span className='ml-[4px] text-xs'>
                {percents}
              </span>
            </div>
          </div>
        </div>
        <div className='text-neutral-500 text-xs font-normal leading-none mt-4 mb-2'>Compared to 699k last week</div>
      </div>
    </div>
  )
}

export default CardInfo