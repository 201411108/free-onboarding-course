import React from 'react'
import MobileAsideMenu from './MobileAsideMenu'
import './MobileNavigationBar.css'
import MobileNavigationMenu from './MobileNavigationMenu'

function MobileNavigationBar() {
    return (
        <div className='MobileNavigationContainer'>
            <nav>
                <MobileNavigationMenu />
                <div /> 
                <MobileAsideMenu />
            </nav>
        </div>
    )
}

export default MobileNavigationBar