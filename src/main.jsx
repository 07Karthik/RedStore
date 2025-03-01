import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyProvider from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </MyProvider>,
)
