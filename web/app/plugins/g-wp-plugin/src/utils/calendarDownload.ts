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
  
  // Validate date
  if (isNaN(d.getTime())) {
    throw new Error(`Invalid date: ${date}`)
  }
  
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
 * Generate a deterministic UID based on event properties
 * Using a simple hash approach for calendar event identification
 */
function generateEventUID(event: CalendarEvent, timestamp: string): string {
  const startStr = typeof event.start === 'string' ? event.start : event.start.toISOString()
  const uniqueStr = `${event.title}-${startStr}-${timestamp}`
  
  // Simple hash function for UID generation (non-cryptographic, but sufficient for calendar UIDs)
  let hash = 0
  for (let i = 0; i < uniqueStr.length; i++) {
    const char = uniqueStr.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  
  return `event-${Math.abs(hash)}-${timestamp}@pyromancy.com`
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
  
  events.forEach((event) => {
    const startDate = formatICSDate(event.start)
    const endDate = event.end ? formatICSDate(event.end) : startDate
    const uid = generateEventUID(event, timestamp)
    
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
