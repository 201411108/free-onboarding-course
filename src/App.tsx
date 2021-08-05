import React from 'react'
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
        <Mobile><div>This is Mobile</div></Mobile>
      </div>
      <Content />
    </>
  )
}

export default App
