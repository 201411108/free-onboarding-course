import React from 'react'
import './DesktopNavigationBar.css'
import Logo from '../Logo'
import DesktopNavigationMenu from './DesktopNavigationMenu'

function DesktopNavigationBar() {
    return (
        // TODO :: 감싸는 div를 container로 따로 만들어서 상단에 고정될 수 있도록
        <div className='NavigationContainer'>
            <nav>
                <Logo />
                <DesktopNavigationMenu />
                {/* TODO :: 탐색에 마우스를 올렸을 때 뜨는 화면 */}
                <div />
                <aside>
                    <ul>
                        {/* 화면 축소되도 보이는 메뉴 */}
                       <li>
                            <button type='button' className='searchButton'>
                                <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18' />
                            </button>
                       </li>
                       <li>
                            <button type='button' className='notiButton'>
                                <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18' />
                            </button>
                        </li> 
                        {/* 화면 축소되면 안 보이는 메뉴 */}
                        <li className='desktopVisible profileButton'>
                            <button type='button' className='profileButton'>
                                <div>
                                    아바타
                                </div>
                            </button>
                        </li>
                        <li className='desktopVisible leftDiv'>
                            <span>기업 서비스</span>
                        </li>
                    </ul>
                </aside>
            </nav>
        </div>
    )
}

export default DesktopNavigationBar