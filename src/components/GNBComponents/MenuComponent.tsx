import React from 'react'
import '../style/MenuComponent.css'

function MenuComponent() {
    return (
        <ul className='menu-ul'>
            <li className='menu-li desktop'>탐색</li>
            <li className='menu-li desktop'>커리어 성장</li>
            <li className='menu-li mobile'>직군별 연봉</li>
            <li className='menu-li mobile'>이력서</li>
            <li className='menu-li mobile'>매치업</li>
            <li className='menu-li mobile'>프리랜서</li>
            <li className='menu-li mobile'>AI 합격예측</li>
        </ul>
    )
}

export default MenuComponent