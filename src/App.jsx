// components
import { Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'

// routes
import Home from './pages/Home'
import Shop from './pages/Shop'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Login from './pages/auth/Login'
import NotFound from './pages/404'
import PrivateRoute from './components/routes/PrivateRoute'
import AuthRoute from './components/routes/AuthRoute'

// css
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path='/shop' element={<Shop />} />
        <Route path='/detail/:id' element={
          <CartProvider>
            <Detail />
          </CartProvider>
        } />
        <Route path='/cart' element={
          <CartProvider>
            <Cart />
          </CartProvider>
        } />
      </Route>
      <Route element={<AuthRoute />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route path='*' element={
        <NotFound />
      } />
    </Routes>
  )
}

export default App
