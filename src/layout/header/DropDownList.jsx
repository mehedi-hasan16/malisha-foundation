import React from 'react'
import { NavLink } from 'react-router-dom'

const DropDownList = ({closeToggleSlide,dropDownArray}) => {

    let menuListRendarView = null;
    menuListRendarView = dropDownArray?.map((item)=>(
        <li className='text-gray-800 hover:text-primary font-semibold' key={item.id} onClick={closeToggleSlide}>
            <NavLink
                className="px-4 py-1.5 inline-block"
                to={item.to}>
                {item.title}
            </NavLink>
        </li>
    ))

  return menuListRendarView;
}

export default DropDownList