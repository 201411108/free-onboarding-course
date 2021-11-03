import React from 'react'
import { Route } from 'react-router-dom'
import { GNBContainer, TitleContainer, MenuContainer, AsideMenuContainer, ContentsContainer } from 'containers'
import { AsideMenuComponent, Content, MenuComponent, TitleComponent } from 'components'
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
            <AsideMenuComponent />
          </AsideMenuContainer>
        </GNBContainer>
        <ContentsContainer>
          <Route exact path='/' component={() => <Content value='home page'/>}/>
          <Route path='/search' component={() => <Content value='search page'/>}/>
          <Route path='/career' component={() => <Content value='career page'/>}/>
        </ContentsContainer>
      </div>
    </div>
  )
}

export default App
