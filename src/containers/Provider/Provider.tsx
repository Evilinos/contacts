import React, { FC, ReactNode } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as ReduxProvider } from 'react-redux'

interface IProps {
  children: ReactNode,
  store: any,
  history: any
}

export const Provider: FC<IProps> = ({children, store, history}) => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </ReduxProvider>
)