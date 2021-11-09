import { ContactsState, ContactsAction, ContactsActionsEnum } from "./types"

const initialState: ContactsState = {
  contacts: [],
  isLoading: true,
  error: ''
}

export default function contactsReducer(state = initialState, action: ContactsAction): ContactsState {
  switch (action.type) {
    case ContactsActionsEnum.SET_CONTACTS:
      return {...state, contacts: action.payload, isLoading: false}
    case ContactsActionsEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case ContactsActionsEnum.SET_ERROR:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state
  }
}