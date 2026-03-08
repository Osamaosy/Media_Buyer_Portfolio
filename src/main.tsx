import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Admin from './pages/Admin.tsx'
import { LanguageProvider } from './context/LanguageContext'

const PortfolioLayout = () => (
  <App />
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>,
)
