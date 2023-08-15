import { FC } from "react"

type NavItemProp = {
  label: string;
  className?: string;
}

const nameClass = 'text-stone-50 text-base font-semibold leading-normal'

const NavItem: FC<NavItemProp> = ({ label, className = nameClass }) => {
  return (
    <div className={className}> {label} </div>
  )
}

export default NavItem