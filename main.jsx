import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './src/i18n'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoadingAnimation from './src/components/ReutComp/LoadingAnimation'

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='*' element={<App />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
