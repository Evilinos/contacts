import { applyMiddleware, combineReducers, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'
import { history } from './history'
import contacts from './contacts'

const rootReducer = combineReducers({
  router: connectRouter(history),
  contacts
})

const composeEnhancers = composeWithDevTools({
  maxAge: 550,
  trace: true,
  traceLimit: 25,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, history }