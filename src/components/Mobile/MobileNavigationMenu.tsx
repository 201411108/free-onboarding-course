import React, { useState }  from 'react'
import './MobileNavigationMenu.css'


function MobileNavigationMenu() {
    const [homeSwitch, setHomeSwitch] = useState<boolean>(false)
    const [searchSwitch, setSearchSwitch] = useState<boolean>(false)
    const [careerSwitch, setCareerSwitch] = useState<boolean>(false)

    const homeClassName = homeSwitch ? 'MobileMenuHome onMouse' : 'MobileMenuHome'
    const searchClassName = searchSwitch ? 'MobileMenuSearch onMouse' : 'MobileMenuSearch'
    const careerClassName = careerSwitch ? 'MobileMenuCareer onMouse' : 'MobileMenuCareer'

    const onMouseEnterHandler = (e: any) => {
        if(e.target.className === 'MobileMenuHome') {
            setHomeSwitch(!homeSwitch)
        } else if(e.target.className === 'MobileMenuSearch') {
            setSearchSwitch(!searchSwitch)
        } else {
            setCareerSwitch(!careerSwitch)
        }
    }

    const onMouseLeaveHandler = (e: any) => {
        if(e.target.className === 'MobileMenuHome onMouse') {
            setHomeSwitch(!homeSwitch)
        } else if(e.target.className === 'MobileMenuSearch onMouse') {
            setSearchSwitch(!searchSwitch)
        } else {
            setCareerSwitch(!careerSwitch)
        }
    }

    return (
        <ul>
            <li className={homeClassName}
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>홈</a>
            </li>
            <li className={searchClassName}
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>탐색</a>
            </li>
            <li className={careerClassName}
                onMouseEnter={ onMouseEnterHandler }
                onMouseLeave={ onMouseLeaveHandler }>
                <a href='/'>커리어 성장</a>
            </li>
        </ul>
    )
}

export default MobileNavigationMenu