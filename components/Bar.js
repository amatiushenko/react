import React from 'react'
import { connect } from 'react-redux'
import ChartistGraph from 'react-chartist'

export default function Bar(graph) {
  return <ChartistGraph data={graph.graph} type={'Bar'} />
}

export default connect(
  state => ({ graph: state.graph })
)(Bar)
