import React from 'react'
import '../style/GNBContainer.css'

function GNBContainer({ children }: any) {
    return (
        <div className='gnb-wrapper'>
            <div className='gnb-container'>
                { children }
            </div>
        </div>
    )
}

export default GNBContainer