import React, { useState, useEffect } from 'react'
import DesktopNavigationBar from './components/Desktop/DesktopNavigationBar'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleResize = () => {
      setWindowSize(window.innerWidth)
  }

  useEffect(() => {
      window.addEventListener('resize', handleResize)
  })

  return (
    <div className='App'>
      {/* min width 1200, 768 / max-width 767 */}
      { (windowSize >= 767) ? (
          <DesktopNavigationBar />
        ) : (
          <div>MobileNavigationBar</div>
        )
      }
    </div>
  );
}

export default App
