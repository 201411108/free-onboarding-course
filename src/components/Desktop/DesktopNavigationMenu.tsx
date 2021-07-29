import React from 'react'
import './DesktopNavigationMenu.css'

function DesktopNavigationMenu() {
    return (
        <ul>
            <li className='Menu'><a href='/'>탐색</a></li>
            <li className='Menu'><a href='/'>커리어 성장</a></li>
            <li className='Menu'><a href='/'>직군별 연봉</a></li>
            <li className='Menu'><a href='/'>이력서</a></li>
            <li className='Menu'><a href='/'>매치업</a></li>
            <li className='Menu'><a href='/'>프리랜서</a></li>
            <li className='Menu'><a href='/'>AI 합격예측</a></li>
       </ul>
    )
}

export default DesktopNavigationMenu