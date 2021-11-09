import React from 'react'
import MainPage from '../pages/MainPage'
import { store, history } from '../store'
import Provider from './Provider'

const App = () => {
  return (
    <Provider store={store} history={history}>
      <MainPage />
    </Provider>
  )
}

export default App