import React from 'react'
import { Link } from 'react-router-dom'
import '../style/MenuComponent.css'

function MenuComponent() {
    return (
        <ul className='menu-ul'>
            {/* TODO :: 
                    AS-IS :: 마우스 올릴 때 파란 밑줄
                    TO-BE :: 해당 페이지에 있을 때 활성화, 데스크톱에서는 회색 밑줄
                             desktop, mobile이 반대로 되어 있음. 각 보이는 화면에 대해서(mobile -> mobile에서만 보이는 요소라는 뜻)
              */}
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