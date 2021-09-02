import React from 'react'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MobileAsideMenu.css'

function MobileAsideMenu() {
    return (
        <ul>
            <li className='mobileAsideMenu'>
                <button type='button' className='buttons'>
                    <FontAwesomeIcon icon={ faSearch } size='lg' />
                </button>
            </li>
            <li className='mobileAsideMenu'>
                <button type='button' className='buttons'>
                    <FontAwesomeIcon icon={ faBell } size='lg' />
                </button>
            </li>
            <li className='mobileAsideMenu'>
                <button type='button' className='buttons'>
                    <FontAwesomeIcon icon={ faBars } size='lg' />
                </button>
            </li>
        </ul>
    )
}

export default MobileAsideMenu