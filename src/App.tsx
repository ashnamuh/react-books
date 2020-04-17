import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import GlobalStyled from 'styles/global'
import { Provider } from 'react-redux'
import store from 'services/store'

import IndexPage from 'pages/index'
import ResultPage from 'pages/result'

export default function App() {
  return (
    <>
      <GlobalStyled />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/result" component={ResultPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}
