import React from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { StaticQuery, graphql } from "gatsby"

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

export default () => {
  return (
    <StaticQuery
      query={graphql`
      query CalendarEvents {
          allContentfulSiSession {
            edges {
              node {
                title
                start
                end
                isAllDay
              }
            }
          }
        }
      `}
      render={data => {
        let eventList = []
        data.allContentfulSiSession.edges.forEach(eventObject => {
          eventObject.node.start = new Date(eventObject.node.start)
          eventObject.node.end = new Date(eventObject.node.end)
          eventList.push(eventObject.node)
        })
        console.log(eventList)
        return (
          <BigCalendar
            localizer={localizer}
            events={eventList}
          />
        )
      }}
    />
  )
}