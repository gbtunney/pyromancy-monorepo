import { useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import { downloadCalendarEvents } from './utils/calendarDownload'
import './calendarstyles.css'

interface CalendarProps {
  height?: string
  initialView?: string
  googleCalendarId?: string
  apiKey?: string
  initialDate?: string
}

export default function Calendar({ 
  height = '600px', 
  initialDate = '2017-06-01',
  initialView = 'dayGridMonth',
  googleCalendarId = 'k835hjhh885m3s2h77mochjtcc@group.calendar.google.com',
  apiKey = 'AIzaSyCnp0CB97FKH0bCHa_e5k3rbVT_f9rZpXI'
}: CalendarProps) {
  const calendarRef = useRef<FullCalendar>(null)

  const handleDownload = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (!calendarApi) return

    const events = calendarApi.getEvents().map(event => ({
      title: event.title,
      start: event.start || new Date(),
      end: event.end || event.start || new Date(),
      description: event.extendedProps.description || '',
      location: event.extendedProps.location || '',
      url: event.url || ''
    }))

    downloadCalendarEvents(events, 'pyromancy-calendar.ics')
  }

  return (
    <div className="bg-red-500">
      <div style={{ marginBottom: '10px' }}>
        <button 
          onClick={handleDownload}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Download Calendar Events
        </button>
      </div>
      <FullCalendar
        ref={calendarRef}
        height={height}
        initialDate={initialDate}
        googleCalendarApiKey={apiKey}
        plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
        initialView={initialView}
        headerToolbar={{
          start: 'title',
          center: 'today',
          end: 'prev,next'
        }}
        events={{
          googleCalendarId
        }}
      />
    </div>
  )
}