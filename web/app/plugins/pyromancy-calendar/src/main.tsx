import React from 'react'
import { createRoot } from 'react-dom/client'
import CalendarComponent from './CalendarComponent'

declare global {
  interface Window {
    PyromancyCalendar: {
      init: (elementId: string, options?: any) => void
    }
  }
}

const PyromancyCalendar = {
  init: (elementId: string, options: any = {}) => {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error(`Element with id "${elementId}" not found`)
      return
    }

    const root = createRoot(element)
    root.render(React.createElement(CalendarComponent, options))
  }
}

// Make it globally available
window.PyromancyCalendar = PyromancyCalendar

export default PyromancyCalendar
