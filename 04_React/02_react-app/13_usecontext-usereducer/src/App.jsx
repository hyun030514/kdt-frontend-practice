import { createContext, useReducer } from 'react'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { cartReducer, initialState } from './reducers/cartReducer'

export const CartContext = createContext();

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ items: state.items, dispatch }}>
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
  )
}

export default App
