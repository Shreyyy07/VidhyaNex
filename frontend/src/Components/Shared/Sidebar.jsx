import React from 'react'
import classNames from 'classnames'
import { FcDepartment } from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClass=
'flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:bg-white rounded-lg text-base'

const Sidebar = () => {
   
  return (
    
    <div className='bg-neutral-900 w-50 p-3 flex flex-col rounded-lg'>
        <div className='flex items-center gap-2 px-1 py-3'>
       <FcDepartment fontSize={24}/>
       <span className='text-neutral-100 text-lg'>SCHOOL</span>
       </div>
       <div className='pt-6 border-b border-neutral-700'>
        </div>
       <div className='flex-1 py-8 flex flex-col gap-5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item}/>
        ))}
       </div>
       <div className='py-8 flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
             <Link to="/login" className="text-red-500 cursor-pointer flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:bg-white rounded-lg text-base ">
                    <HiOutlineLogout/>
                    Logout
                    </Link>
          
    
        </div>
    </div>
  )
}
function SidebarLink({ item }) {
    const {pathname}=useLocation()
    return (
        <Link to={item.path} 
        className={classNames(pathname === item.path ? 'bg-white text-black' : 'text-neutral-400',
        linkClass
        )}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar
