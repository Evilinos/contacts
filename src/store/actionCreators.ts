import { ContactsActionCreators } from './contacts/actionCreators'
import { push } from 'connected-react-router'

export const allActionCreators = {
  ...ContactsActionCreators,
  push
}