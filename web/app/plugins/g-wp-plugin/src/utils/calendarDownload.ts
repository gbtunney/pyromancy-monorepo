/**
 * Utility functions for downloading calendar events
 */

interface CalendarEvent {
  title: string
  start: Date | string
  end?: Date | string
  description?: string
  location?: string
  url?: string
}

/**
 * Format a date for ICS format (YYYYMMDDTHHMMSSZ)
 */
function formatICSDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  const year = d.getUTCFullYear()
  const month = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  const hours = String(d.getUTCHours()).padStart(2, '0')
  const minutes = String(d.getUTCMinutes()).padStart(2, '0')
  const seconds = String(d.getUTCSeconds()).padStart(2, '0')
  
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`
}

/**
 * Escape special characters for ICS format
 */
function escapeICSText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

/**
 * Convert calendar events to ICS format
 */
export function eventsToICS(events: CalendarEvent[]): string {
  const now = new Date()
  const timestamp = formatICSDate(now)
  
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pyromancy Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ]
  
  events.forEach((event, index) => {
    const startDate = formatICSDate(event.start)
    const endDate = event.end ? formatICSDate(event.end) : startDate
    const uid = `event-${index}-${timestamp}@pyromancy.com`
    
    icsContent.push('BEGIN:VEVENT')
    icsContent.push(`UID:${uid}`)
    icsContent.push(`DTSTAMP:${timestamp}`)
    icsContent.push(`DTSTART:${startDate}`)
    icsContent.push(`DTEND:${endDate}`)
    icsContent.push(`SUMMARY:${escapeICSText(event.title || 'Untitled Event')}`)
    
    if (event.description) {
      icsContent.push(`DESCRIPTION:${escapeICSText(event.description)}`)
    }
    
    if (event.location) {
      icsContent.push(`LOCATION:${escapeICSText(event.location)}`)
    }
    
    if (event.url) {
      icsContent.push(`URL:${event.url}`)
    }
    
    icsContent.push('END:VEVENT')
  })
  
  icsContent.push('END:VCALENDAR')
  
  return icsContent.join('\r\n')
}

/**
 * Download ICS file to user's device
 */
export function downloadICSFile(icsContent: string, filename: string = 'calendar.ics'): void {
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}

/**
 * Download calendar events as ICS file
 */
export function downloadCalendarEvents(events: CalendarEvent[], filename?: string): void {
  const icsContent = eventsToICS(events)
  downloadICSFile(icsContent, filename)
}
