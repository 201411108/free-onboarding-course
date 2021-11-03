import React from 'react'
import { Link } from 'react-router-dom'
import '../style/TitleComponent.css'

function TitleComponent() {
    return (
        <>
            <div className='title-item desktop'>
                <Link className='title-link' to='/'>Wanthing</Link>
            </div>
            {/* TODO :: 
                    AS-IS :: 마우스 올릴 때 파란 밑줄
                    TO-BE :: 해당 페이지에 있을 때 활성화
              */}
            <div className='title-item mobile'>
                <Link className='title-link' to='/'>홈</Link>
            </div>
        </>
    )
}

export default TitleComponent