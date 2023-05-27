// css
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Detail from './pages/Detail'
import CartCTXFunc from './context/CartContext'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/detail/:id' element={
        <CartCTXFunc>
          <Detail />
        </CartCTXFunc>
      } />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<h2>page not found</h2>} />
    </Routes>
  )
}

export default App
