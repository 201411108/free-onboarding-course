import React from 'react'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div className='NavigationContainer'>
            <nav>
                <div className='logo'>wanted
                    {/* TODO :: 미디어 쿼리에 따라 나타나도록 설정 */}
                    {/* <a href='/' className='logoA'>
                        <i className='iconLogo'/>
                    </a> */}
                </div>
                <ul>
                    <li className='home phoneOnly'>홈</li>
                    {/* 화면 크기가 작아져도 보이는 탭 */}
                    <li>탐색</li>
                    <li>커리어 성장</li>
                    {/* 화면 크기가 작아지면 사라지는 탭 */}
                    <li className='desktopVisible'>직군별 연봉</li>
                    <li className='desktopVisible'>이력서</li>
                    <li className='desktopVisible'>매치업</li>
                    <li className='desktopVisible'>프리랜서</li>
                    <li className='desktopVisible'>AI 합격예측</li>
                </ul>
                {/* TODO :: 탐색에 마우스를 올렸을 때 뜨는 화면 */}
                <div />
                <aside>
                    <ul>
                       <li>
                            <button type='button' className='searchButton'>
                                <svg xmlns='https://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' />
                            </button>
                       </li>
                       <li>
                            <button type='button'/>
                        </li> 
                    </ul>
                </aside>
            </nav>
        </div>
    )
}

export default NavigationBar