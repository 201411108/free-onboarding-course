import React from 'react'
import { GNBContainer, TitleContainer, MenuContainer, AsideMenuContainer, ContentsContainer } from 'containers'
import { Content, MenuComponent, TitleComponent } from 'components'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div id='wrap'>
        <GNBContainer>
          <TitleContainer>
            <TitleComponent />
          </TitleContainer>
          <MenuContainer>
            <MenuComponent />
          </MenuContainer>
          <AsideMenuContainer>
            Aside Menus
          </AsideMenuContainer>
        </GNBContainer>
        <ContentsContainer>
          <Content />
        </ContentsContainer>
      </div>
    </div>
  )
}

export default App
