import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import MuiProvider from './providers/mui.provider.tsx'
import TanstackProvider from './providers/tanstack.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <MuiProvider>
        <App />
      </MuiProvider>
    </TanstackProvider>
  </StrictMode>,
)
