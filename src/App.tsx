import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import {Home} from './pages/Home'
import { SidebarWrapper } from './components/SidebarWrapper'
import { NotFound } from './pages/NotFound'
import { FooterWrapper } from './components/FooterWrapper'
import { About } from './pages/About'
import { Plugins } from './pages/Plugins'

function App() {
  return (
    <BrowserRouter>
      <FooterWrapper>
        <SidebarWrapper>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='plugins' element={<Plugins/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </SidebarWrapper>
      </FooterWrapper>
    </BrowserRouter>
  )
}

export default App
