import React from  'react'
import './DesktopAsideMenu.css'

// Desktop -> all
// phone -> search, noti, menuList
function DesktopAsideMenu() {
    return (
        <aside>
            <ul>
                <li className='AsideMenu'>
                    <button type='button' className='searchButton'>
                        <img className='searchButtonImg' 
                            src='/assets/group-9.webp'
                            srcSet='/assets/group-9@2x.webp 2x,
                                    /assets/group-9@e3x.webp 3x'
                            alt='search'
                        />
                    </button>
                </li>
                <li className='AsideMenu'>
                    <button type='button' className='searchButton'>
                        <img className='searchButtonImg' 
                            src='/assets/group-9.webp'
                            srcSet='/assets/group-9@2x.webp 2x,
                                    /assets/group-9@e3x.webp 3x'
                            alt='search'
                        />
                    </button>
                </li> 
                <li className='AsideMenu'>
                    <button type='button' className='searchButton'>
                        <img className='searchButtonImg' 
                            src='/assets/group-9.webp'
                            srcSet='/assets/group-9@2x.webp 2x,
                                    /assets/group-9@e3x.webp 3x'
                            alt='search'
                        />
                    </button>
                </li>
                <li className='AsideMenu leftDiv'>
                    <a className='dashboardButton' href='/'>기업 서비스</a>
                </li>
            </ul>
        </aside>
    )
}

export default DesktopAsideMenu