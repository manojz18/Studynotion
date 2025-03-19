import React from 'react'
import * as Icons from 'react-icons/vsc'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
// import {useDispatch} from 'react-redux'

export const SidebarLink = ({link, iconName}) => {

    const location = useLocation()
    const Icon = Icons[iconName]
    // const dispatch = useDispatch();

    const matchRoute = (route) => {
      return matchPath({path: route}, location.pathname)
    }

  return (
    <NavLink
    to={link.path}
    className={` relative text-sm px-8 py-2 font-medium ${matchRoute(link.path) ? "bg-yellow-800" : "bg-opacity-0"}`}
    >
      <span className={`absolute top-0 left-0 h-full w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}>
      </span>

      <div className='flex items-center gap-x-2'>

        <Icon className={"text-lg"}/>
        <span>{link.name}</span>

      </div>
    </NavLink>
  )
}
