import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoadingAnimation from './components/ReutComp/LoadingAnimation'

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Suspense fallback={<LoadingAnimation />}>
        <Routes>
          <Route path='/' exact element={<App />} />
          <Route path='*' element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </I18nextProvider>
)
