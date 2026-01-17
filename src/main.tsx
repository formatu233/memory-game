import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoryGame } from './components/MemoryGame'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>,
)