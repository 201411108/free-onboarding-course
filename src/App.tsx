import React from 'react'
import MobileNavigationBar from './components/Mobile/MobileNavigationBar'
import { Desktop, Mobile } from './MediaQuery'
import DesktopNavigationBar from './components/Desktop/DesktopNavigationBar'
import Content from './components/Content'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Desktop>
          <DesktopNavigationBar />
        </Desktop>
        <Mobile>
          <MobileNavigationBar />
        </Mobile>
      </div>
      <Content />
    </>
  )
}

export default App
