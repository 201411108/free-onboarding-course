/* eslint-disable prefer-template */
import React, { useState, useEffect } from 'react'
import './DesktopNavigationMenu.css'

function DesktopNavigationMenu() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    const homeLi = <li className={'home ' + (windowSize >= 768 ? 'phoneOnly' : '')}>홈</li>

    return (
        <ul>
            { (windowSize < 768) ?
                homeLi : <div/>
            }
            <li>탐색</li>
            <li>커리어 성장</li>
            { (windowSize >= 768) ?
                <>
                    <li className='desktopVisible'>직군별 연봉</li>
                    <li className='desktopVisible'>이력서</li>
                    <li className='desktopVisible'>매치업</li>
                    <li className='desktopVisible'>프리랜서</li>
                    <li className='desktopVisible'>AI 합격예측</li>
                </> : 
                <div/>
            }
        </ul>
    )
}

export default DesktopNavigationMenu