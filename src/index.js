import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import store, { history } from './configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css'
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css'
// Import Main styles for this application
import './scss/style.scss'

// Containers
import Login from './views/Pages/Login/Login'
import Home from './containers/Home/Home'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        <Route path="/" name="Home" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
