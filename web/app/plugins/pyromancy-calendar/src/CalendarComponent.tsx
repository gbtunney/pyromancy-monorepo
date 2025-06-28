import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

interface CalendarComponentProps {
  events?: any[]
  height?: string | number
  initialView?: string
  headerToolbar?: any
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  events = [],
  height = 'auto',
  initialView = 'dayGridMonth',
  headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }
}) => {
  const handleDateSelect = (selectInfo: any) => {
    console.log('Date selected:', selectInfo)
  }

  const handleEventClick = (clickInfo: any) => {
    console.log('Event clicked:', clickInfo.event)
  }

  return (
    <div className="pyromancy-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={headerToolbar}
        initialView={initialView}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        height={height}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </div>
  )
}

export default CalendarComponent
