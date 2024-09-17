import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AllC from './allC.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllC/>
  </StrictMode>,
);
