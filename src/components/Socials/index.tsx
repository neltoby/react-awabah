import { FC, HTMLAttributes } from 'react'

type ImgProp = HTMLAttributes<HTMLImageElement> & {
  src: string;
}

const Img: FC<ImgProp> = ({src, ...props}) => {
  return (
    <img src={src} {...props}/>
  )
}

export default Img