import React from 'react'
import Navigation from '../components/navigation'
import 'normalize.css';
import './base.css'

export default ({ children }) => (
  <div id="test" style={{ width:'100%', height:'100%'}}>
  <link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/npm/react-big-calendar@0.20.4/lib/css/react-big-calendar.css'/>
    {/* <Navigation/> */}
    {children}
  </div>
)