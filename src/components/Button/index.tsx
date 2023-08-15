import { ButtonHTMLAttributes, FC } from "react"

type ButtonPropTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}

const nameClass = 'bg-red-200 rounded text-gray-800 font-semibold py-2 px-4'

export const Button: FC<ButtonPropTypes> = ({label, className = nameClass, ...props}) => {
  return (
    <button className={className} {...props}>{ label}</button>
  )
}
