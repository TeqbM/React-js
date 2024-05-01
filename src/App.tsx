import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Shop from './Components/Pages/Shop'
import Singleproducts from './Components/Pages/Singleproducts'
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Singleproducts />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
