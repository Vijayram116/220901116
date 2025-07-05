import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Shortener from './Shortener'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shortener />
  </StrictMode>,
)
