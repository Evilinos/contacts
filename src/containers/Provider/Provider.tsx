import React, { FC, ReactNode } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as ReduxProvider } from 'react-redux'

interface IProps {
  children: ReactNode,
  store: any,
  history: any
}

const Provider: FC<IProps> = ({children, store, history}) => {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </ReduxProvider>
  )
}

export default Provider