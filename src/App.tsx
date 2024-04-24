import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Notfound404 from './Components/Pages/Notfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
