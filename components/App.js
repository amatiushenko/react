import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/graph">Graph 1</Link>
        {' '}
        <Link to="/graph?barCount=7&maxHeight=500&minHeight=300">Graph 2</Link>
      </header>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
