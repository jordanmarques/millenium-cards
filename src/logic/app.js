import App from 'overmind'
import createConnect from 'overmind-react'
import * as state from './state'
import * as actions from './actions'

const app = new App({
  state,
  actions
})

export const connect = createConnect(app)

export default app