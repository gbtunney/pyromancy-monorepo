import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
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
  return (
    <div className="bg-red-500">
      <FullCalendar
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