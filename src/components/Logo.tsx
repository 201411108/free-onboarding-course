import React, { useState, useEffect } from 'react'
import './Logo.css'

// 로고 작은 화면에서는 안보여야 한다.
function Logo() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    if(windowSize >= 768) {
        return (
            <div className='logo'>
                wanted
            </div>
        )
    } 
    return <div />
    
}

export default Logo