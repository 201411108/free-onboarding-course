import React from 'react'
import '../style/GNBMenuContainer.css'

function AsideMenuContainer({ children }: any) {
    return (
        <div className='aside-menu-container'>
            { children }
        </div>
    )
}

export default AsideMenuContainer