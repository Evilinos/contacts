import React, { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { Header } from '../../components/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from '../../routes'
import MainPage from '../../pages/MainPage'
import { Container } from '@mui/material'
import ContactPage from '../../pages/ContactPage'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const AppContainer: FC = () => {
  const {fetchContacts} = useActions()
  const {isLoading, error} = useTypedSelector(state => state.contacts)
  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <Container>
      <Header />
      {isLoading ?
        <div>Loading</div>
        : error ? <div>Error</div> :
          <Switch>
            <Route exact path={routes.index} component={MainPage} />
            <Route path={routes.contact} component={ContactPage} />
            <Redirect to={routes.index} />
          </Switch>}
    </Container>
  )
}