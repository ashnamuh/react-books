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
import AshPage from 'pages/ash'
import ManduPage from 'pages/mandu'

export default function App() {
  return (
    <>
      <GlobalStyled />
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ash">Ash</Link>
              </li>
              <li>
                <Link to="/mandu">Mandu</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/ash" component={AshPage} />
              <Route exact path="/mandu" component={ManduPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  )
}
