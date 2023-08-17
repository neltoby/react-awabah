import React from 'react'
import CardInfo from './CardInfo'
import Graph from './Graph'
import Distribution from './Distribution'
import MapOfNigeria from './MapOfNigeria'
import StateData from './StateData'

const cardInfo = [
  { header: 'Registered Customers', count: 720.2, percents: 2.9 },
  { header: 'Active Customers', count: 645.7, percents: 2.9 },
  { header: 'Active Customers', count: 326.7, percents: 2.9 },
  { header: 'Active Customers', count: 319, percents: 2.9, profit: false },
]

const Body = () => {
  return (
    <div className='mx-8 mt-8' >
      <div className="text-neutral-500 text-xs font-normal leading-none">Friday, August 4th</div>
      <div className="text-neutral-700 text-lg font-semibold leading-relaxed">Good morning, Olamide</div>
      <div className='grid grid-cols-4 gap-4'>
        {cardInfo.map((item, i) => (
          <CardInfo key={`${item.header}${i}`} header={item.header} count={item.count} percents={item.percents} profit={!!item.profit} />
        ))}
      </div>
      <div className='grid grid-cols-4 gap-4 mt-6'>
        <div className='col-start-1 col-span-3 p-4 shadow-sm shadow-gray-200'>
          <Graph />
        </div>
        <div className='col-start-4 col-span-1'>
          <Distribution />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="col-start-1 col-span-2 p-4 shadow-sm shadow-gray-200">
          <MapOfNigeria />
        </div>
        <div className="col-start-3 col-span-1 p-6 border border-solid border-gray-200  rounded-md">
          <StateData />
        </div>
      </div>
    </div>
  )
}

export default Body