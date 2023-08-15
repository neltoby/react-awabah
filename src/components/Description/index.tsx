import { FC } from "react"

type DescriptionProp = {
  img: unknown;
  desc: string;
  heading: string;
  ltr?: boolean;
}

const Description: FC<DescriptionProp> = ({ img, desc, heading, ltr = true }) => {
  return (
    <div className='mt-24 grid grid-cols-7 grid-rows-1 gap-16'>
      {ltr && (
        <div className={`col-start-1 col-span-4`}>
        <img src={img as string} className="object-cover w-full h-full" />
        </div>)
      }
      {!ltr && (
        <div className={`col-start-1' col-span-2 flex justify-start' items-center`}>
        <div className="break-normal">
          <div className='font-bold text-3xl'>
            {heading}
          </div>
          <div className='mt-4 leading-8'>
            {desc}
          </div>
        </div>
      </div>
      )}
      {ltr && (
        <div className={`col-start-6 col-span-2 flex justify-end items-center`}>
        <div className="break-normal">
          <div className='font-bold text-3xl'>
            {heading}
          </div>
          <div className='mt-4 leading-8'>
            {desc}
          </div>
        </div>
      </div>
      )}
      {!ltr && (
        <div className={`col-start-4 col-span-4`}>
        <img src={img as string} className="object-cover w-full h-full" />
      </div>
      )}
      {/* <div className={`${ltr ? 'col-start-1' : 'col-start-4'} col-span-4`}>
        <img src={img as string} className="object-cover w-full h-full" />
      </div>
      <div className={`${ltr ? 'col-start-5' : 'col-start-1'} col-span-2 flex ${ltr ? 'justify-end' : 'justify-start'} items-center`}>
        <div className="break-normal">
          <div className='font-bold text-3xl'>
            {heading}
          </div>
          <div className='mt-4'>
            {desc}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Description