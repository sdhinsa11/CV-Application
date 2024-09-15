import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalSection from './Personal.jsx'
import Resume from './Resume.jsx'
import AllC from './allC.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllC/>
  </StrictMode>,
);
