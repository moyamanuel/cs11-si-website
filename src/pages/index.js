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
            <Calendar eventList={this.state.calendarEvents}/>
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