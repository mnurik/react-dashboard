import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/root'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import appSagas from './sagas/root'

export const history = createHistory()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = routerMiddleware(history)

export default createStore(reducers, composeWithDevTools(applyMiddleware(middleware, sagaMiddleware)))

// then run the saga
sagaMiddleware.run(appSagas)
