//import 'https://use.typekit.net/qld2bql.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'uno.css'
import './index.css'
import App from './App.tsx'

//const uno = await createGenerator(config)
//const theme = uno.config.theme // This gets the raw config, not the fully resolved theme
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
