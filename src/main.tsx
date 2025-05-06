/// <reference types="vite-plugin-svgr/client" />

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ThemeProvider from './contexts/theme/ThemeProvider.tsx'
import TasksProvider from './contexts/task/TasksProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>
)
