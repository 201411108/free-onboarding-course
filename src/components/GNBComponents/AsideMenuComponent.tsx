import React from 'react'
import '../style/AsideMenuComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons'

function AsideMenuComponent() {
    return (
        <>
            <FontAwesomeIcon className='aside-item' icon={ faSearch } size='lg' />
            <FontAwesomeIcon className='aside-item' icon={ faBell } size='lg' />
            <FontAwesomeIcon className='aside-item desktop' icon={ faUserCircle } size='lg' />
            <FontAwesomeIcon className='aside-item mobile' icon={ faBars } size='lg' />
            <div className='aside-btn desktop'><a className='aside-a' href='/'>기업 서비스</a></div>
        </>
    )
}

export default AsideMenuComponent