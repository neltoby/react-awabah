import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavLinkProps = {
  to: string;
  label: string
  icon?: ReactNode;
}

const CustomNavLink: FC<NavLinkProps> = ({ to, label, icon }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div className={`${isActive ? 'bg-green-100' : ''} p-4 flex rounded-md`}>
          {icon && (<span>{icon}</span>)}
          <span className='ml-4 text-gray-800 text-sm font-medium leading-tight'>{label}</span>
        </div>)}
    </NavLink>
  )
}

export default CustomNavLink