import { FC } from "react";

type BarsProp = {
  loc: string;
  users: number;
  color: string;
  width: string;
}

const Bars:FC<BarsProp> = ({loc, users, color, width}) => {
  return (
    <div className='mt-8'>
      <div className="flex justify-between ">
        <div className="text-neutral-700 text-sm font-medium leading-tight">{loc}</div>
        <div className="text-neutral-500 text-sm font-normal leading-tight">{users} Users</div>
      </div>
      <div className="h-2 bg-slate-100 rounded-3xl mt-2 flex">
        <div className={`${color} ${width} h-full rounded-3xl`}/>
      </div>
    </div>
  )
}

export default Bars