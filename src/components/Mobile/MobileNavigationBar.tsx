import React from 'react'
import './MobileNavigationBar.css'
import MobileNavigationMenu from './MobileNavigationMenu'

function MobileNavigationBar() {
    return (
        <div className='MobileNavigationContainer'>
            <nav>
                <MobileNavigationMenu />
                <div /> 
            </nav>
        </div>
    )
}

export default MobileNavigationBar