/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Desktop, Mobile } from './MediaQuery'
import DesktopNavigationBar from './components/Desktop/DesktopNavigationBar'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Desktop>
        <DesktopNavigationBar />
      </Desktop>
      <Mobile><div>This is Mobile</div></Mobile>
    </div>
  )
}

export default App
