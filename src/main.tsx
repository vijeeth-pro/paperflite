import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebRouter from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebRouter />
  </StrictMode>,
)
