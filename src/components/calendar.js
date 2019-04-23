import React from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../events'

const localizer = BigCalendar.momentLocalizer(moment)

export default (props) => {
  return (
    <BigCalendar
      localizer={localizer}
      events={events}
    />
  )
}