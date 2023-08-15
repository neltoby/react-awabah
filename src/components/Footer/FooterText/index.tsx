import {FC} from 'react'

type FooterTextProp = {
  label: string;
}

const FooterText: FC<FooterTextProp> = ({ label }) => {
  return (
    <p className='mt-4 opacity-60 text-white text-base font-normal leading-normal'>{label}</p>
  )
}

export default FooterText