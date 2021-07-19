import React from 'react'
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* min width 1200, 768 / max-width 767 */}
      <NavigationBar />
      <div className='categories' />
    </div>
  );
}

export default App
