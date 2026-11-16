import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import App from './App.jsx'
import './styles/base.css'
import './styles/shared.css'
import './styles/Home.css'
import './styles/Projects.css'
import './styles/themes.css'
import './styles/Motion.css'
import './styles/Polish.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter>
    </ThemeProvider>
)
