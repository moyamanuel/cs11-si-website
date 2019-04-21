import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Calendar from '../components/calendar'


class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarEvents: [],
    }
  }

  componentDidMount() {
    let allCalendarEvents = this.props.data.allContentfulSiSession.edges;
    allCalendarEvents.forEach(eventObject => {
      eventObject.node.start = new Date(eventObject.node.start)
      eventObject.node.end = new Date(eventObject.node.end)
      this.setState(prevState => ({
        calendarEvents: [...prevState.calendarEvents, eventObject.node]
      }))
    })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout>
        <div style={{ background: '#fff'}}>
        <Helmet title={siteTitle} />
        <h1>This is the start of something great</h1>
          <div style={{height:'500px'}}>
          <BigCalendar
      events={[
        {
          'title': 'My event',
          'allDay': false,
          'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
          'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
        }
      ]}
      step={60}
      view='week'
      views={['week']}
      min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
      max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
      date={new Date(2018, 0, 1)}
    />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query allCalendarEvents {
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
`

export default RootIndex