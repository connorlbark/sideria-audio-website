import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import {Home} from './pages/Home'
import { SidebarWrapper } from './components/SidebarWrapper'
import { NotFound } from './pages/NotFound'
import { FooterWrapper } from './components/FooterWrapper'
import { About } from './pages/About'
import { Plugins } from './pages/Plugins'
import { Disperse } from './pages/plugins/Disperse'

function App() {
  return (
    <BrowserRouter>
      <FooterWrapper>
        <SidebarWrapper>
          <article className="prose prose prose-custom">
            <Routes>
              <Route index element={<Home/>}/>
              <Route path='plugins'>
                <Route index element={<Plugins/>}/>
                <Route path='disperse' element={<Disperse/>}/>
              </Route>
              <Route path='about' element={<About/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </article>
        </SidebarWrapper>
      </FooterWrapper>
    </BrowserRouter>
  )
}

export default App
