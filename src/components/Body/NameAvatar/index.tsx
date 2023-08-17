import { FC } from "react";

const getFirstLetter = (str: string): string => {
  return str[0].toUpperCase()
}

type NameAvatarProp = {
  index: number;
  str: string;
}

const NameAvatar: FC<NameAvatarProp> = ({ index, str }) => {
  const avatar = getFirstLetter(str)
  return (
    <div className="mt-4"><span className="text-xs font-normal leading-none">{index + 1}.</span><span className="mx-4 rounded-full px-[8px] p-[5px]  text-green-900 bg-green-100 text-center text-xs font-normal leading-none">{avatar}</span> <span className="text-neutral-500 text-sm font-normal leading-tight">{str}</span></div>
  )
}

export default NameAvatar