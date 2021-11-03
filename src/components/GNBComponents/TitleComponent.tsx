import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/TitleComponent.css'

function TitleComponent() {
    return (
        <>
            <div className='title-item desktop'>
                <Link className='title-link' to='/'>Wanthing</Link>
            </div>
            {/* TODO :: 홈에 마우스 올릴 때 파란색 밑줄 뜨도록 */}
            <div className='title-item mobile'>
                <Link className='title-link' to='/'>홈</Link>
            </div>
        </>
    )
}

export default TitleComponent