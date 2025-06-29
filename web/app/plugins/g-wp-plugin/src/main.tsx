import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import Calendar from './Calendar.tsx' 

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.g-calendar-container')
  containers.forEach(container => {
    const props = {
      height: container.dataset.height || '600px',
      initialView: container.dataset.initialView || 'dayGridMonth',
      initialDate: container.dataset.initialDate || '2017-06-01',
      googleCalendarId: container.dataset.googleCalendarId,
      apiKey: container.dataset.apiKey
    }
    
    createRoot(container).render(
      <StrictMode>
        <Calendar {...props} />
      </StrictMode>
    )
  })
})
