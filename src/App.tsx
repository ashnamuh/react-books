import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import GlobalStyled from 'styles/global'
import { Provider } from 'react-redux'
import store from 'services/store'

import IndexPage from 'pages/index'
import ResultPage from 'pages/result'
import AshPage from 'pages/ash'
import ManduPage from 'pages/mandu'

export default function App() {
  return (
    <>
      <GlobalStyled />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/ash" component={AshPage} />
            <Route exact path="/mandu" component={ManduPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}
