import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { lazy } from 'react'

const Home = lazy(() => import('./js/pages/Home.jsx'))
const Activity = lazy(() => import('./js/pages/Activity.jsx'))
const Class = lazy(() => import('./js/pages/Class.jsx'))
const Gallery = lazy(() => import('./js/pages/Gallery.jsx'))
const Contact = lazy(() => import('./js/pages/Contact.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/class" element={<Class />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
