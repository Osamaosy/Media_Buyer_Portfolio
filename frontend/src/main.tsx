import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Admin from './pages/Admin.tsx'
import Login from './pages/Login.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('admin_token');
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>,
)
