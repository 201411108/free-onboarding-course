import React  from 'react'
import './MobileNavigationMenu.css'

// TODO :: 항목이 클릭되었을 때, 가장 아래 줄에 파란색으로 밑줄이 그어져야 한다.
function MobileNavigationMenu() {
    const onMouseEnterHandler = (e: any) => {
        e.target.parentNode.className = 'MobileMenu onMouse'
    }

    const onMouseLeaveHandler = (e: any) => {
        e.target.parentNode.className = 'MobileMenu'
    }

    return (
        <ul>
            <li className='MobileMenu'
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>홈</a>
            </li>
            <li className='MobileMenu'
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>탐색</a>
            </li>
            <li className='MobileMenu'
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>커리어 성장</a>
            </li>
        </ul>
    )
}

export default MobileNavigationMenu