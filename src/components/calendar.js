import React from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../events'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

export default (props) => {
  return (
    <BigCalendar
      localizer={localizer}
      events={events}
    />
  )
}