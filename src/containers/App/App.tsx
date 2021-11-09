import React, { FC } from 'react'
import { history, store } from '../../store'
import { Provider } from '../Provider'
import { AppContainer } from '../AppContainer'

export const App: FC = () => (
  <Provider store={store} history={history}>
    <AppContainer />
  </Provider>
)