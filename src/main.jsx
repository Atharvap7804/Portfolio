import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext.jsx'
import { ExperienceProvider } from "./context/ExperienceContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectsProvider>
      <ExperienceProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </ExperienceProvider>
    </ProjectsProvider>
  </StrictMode>,
)
