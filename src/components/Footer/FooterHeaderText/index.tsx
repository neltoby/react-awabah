import { FC } from 'react'

type FooterHeadertextProp = {
  label: string;
}

const FooterHeadertext: FC<FooterHeadertextProp> = ({label}) => {
  return (
    <p className='text-white text-lg font-bold leading-relaxed'>{label}</p>
  )
}

export default FooterHeadertext