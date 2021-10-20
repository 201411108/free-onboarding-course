import React from 'react'
import '../style/GNBMenuContainer.css'

function TitleContainer({ children }: any) {
    return (
        <div className='title-container'>
            { children }
        </div>
    )
}

export default TitleContainer