import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <h1>This is the start of something great</h1>
      </div>
    )
  }
}

export default RootIndex