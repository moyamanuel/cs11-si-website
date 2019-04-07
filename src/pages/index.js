import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Layout from "../components/layout"

require('react-big-calendar/lib/css/react-big-calendar.css');

//import MyCalendar from '../components/test'

const localizer = BigCalendar.momentLocalizer(moment)



class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout>
        <div style={{ background: '#fff', width:'100%', height:'100%'}}>
        <Helmet title={siteTitle} />
        <h1>This is the start of something great</h1>
          <BigCalendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </Layout>
    )
  }
}

export default RootIndex