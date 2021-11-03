import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/MenuComponent.css'

function MenuComponent() {
    return (
        <ul className='menu-ul'>
            {/* TODO :: 탐색 및 커리어 성장에 마우스 올렸을 때 파란색 밑줄이 뜨도록 */}
            <li className='menu-li desktop'><Link className='menu-link' to='/search'>탐색</Link></li>
            <li className='menu-li desktop'><Link className='menu-link' to='/career'>커리어 성장</Link></li>
            <li className='menu-li mobile'>직군별 연봉</li>
            <li className='menu-li mobile'>이력서</li>
            <li className='menu-li mobile'>매치업</li>
            <li className='menu-li mobile'>프리랜서</li>
            <li className='menu-li mobile'>AI 합격예측</li>
        </ul>
    )
}

export default MenuComponent