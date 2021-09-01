import React from  'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import './DesktopAsideMenu.css'

// Desktop -> all
// phone -> search, noti, menuList
function DesktopAsideMenu() {
    return (
        <aside>
            <ul>
                <li className='AsideMenu'>
                    <button type='button' className='buttons'>
                        <FontAwesomeIcon icon={ faSearch } size='lg' />
                    </button>
                </li>
                <li className='AsideMenu'>
                    <button type='button' className='buttons'>
                        <FontAwesomeIcon icon={ faBell } size='lg' />
                    </button>
                </li> 
                <li className='AsideMenu'>
                    <button type='button' className='buttons'>
                        <FontAwesomeIcon icon={ faUserCircle } size='lg' />
                    </button>
                </li>
                <li className='AsideMenu leftDiv'>
                    <a className='dashboardButton' href='/'>기업 서비스</a>
                </li>
            </ul>
        </aside>
    )
}

export default DesktopAsideMenu