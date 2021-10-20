import React from 'react'
import '../style/GNBMenuContainer.css'

function MenuContainer({ children }: any) {
    return (
        <div className='menu-container'>
            { children }
        </div>
    )
}

export default MenuContainer