import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalSection from './Personal.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalSection />
  </StrictMode>,
);
