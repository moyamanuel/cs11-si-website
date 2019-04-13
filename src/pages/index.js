import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Calendar from '../components/calendar'
class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: null,
    }
  }
  componentDidMount() {
    this.setState({
      test: <Calendar/>
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
            {this.state.test}
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex