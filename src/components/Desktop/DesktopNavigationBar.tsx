import React from 'react'
import './DesktopNavigationBar.css'
import Logo from './Logo'
import DesktopNavigationMenu from './DesktopNavigationMenu'
import DesktopAsideMenu from './DesktopAsideMenu'

function DesktopNavigationBar() {
    return (
        <div className='NavigationContainer'>
            <nav>
                <Logo />
                <DesktopNavigationMenu />
                {/* TODO :: 탐색에 마우스를 올렸을 때 뜨는 화면 */}
                <div />
                <DesktopAsideMenu />
            </nav>
        </div>
    )
}

export default DesktopNavigationBar