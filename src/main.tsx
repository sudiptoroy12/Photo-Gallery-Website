
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import { FavoriteProvider } from './context/FavoriteContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <FavoriteProvider>
    <App />
     <ScrollToTop />
  </FavoriteProvider>
  </BrowserRouter>,
)
