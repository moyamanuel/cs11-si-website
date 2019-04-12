import React from 'react'
import Navigation from '../components/navigation'
import 'normalize.css';
import './base.css'

export default ({ children }) => (
  <div id="test" style={{ width:'100%', height:'100%'}}>
    {/* <Navigation/> */}
    {children}
  </div>
)