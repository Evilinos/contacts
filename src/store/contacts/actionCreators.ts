import { ContactsActionsEnum, SetContactsAction, SetErrorAction, SetIsLoadingAction } from './types'
import { IContact } from '../../models/IContact'
import { AppDispatch } from '../index'
import axios from 'axios'

interface IAddContactArgValues {
  firstname: string,
  lastname?: string,
  middlename?: string,
  email?: string,
  phone: string
}

export const ContactsActionCreators = {
  setContacts: (contacts: IContact[]): SetContactsAction => ({
    type: ContactsActionsEnum.SET_CONTACTS,
    payload: contacts,
  }),
  setContact: () => {

  },
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: ContactsActionsEnum.SET_IS_LOADING,
    payload
  }),
  setError: (message: string): SetErrorAction => ({
    type: ContactsActionsEnum.SET_ERROR,
    payload: message
  }),
  fetchContacts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ContactsActionCreators.setIsLoading(true))

      setTimeout(async () => {
        const localStorageData = localStorage.getItem('contacts')
        if (!localStorageData) {
          const response = await axios.get<IContact[]>('/db/users.json')
          const contacts = response.data
          localStorage.setItem('contacts', JSON.stringify(contacts))
          dispatch(ContactsActionCreators.setContacts(contacts))
        } else {
          const contacts: IContact[] = JSON.parse(localStorageData)
          dispatch(ContactsActionCreators.setContacts(contacts))
        }

        dispatch(ContactsActionCreators.setIsLoading(false))
      }, 1000)
    } catch (err) {
      dispatch(ContactsActionCreators.setError('Loading contacts error'))
      console.log(err)
    }
  },
  addContact: (values: IAddContactArgValues) => async (dispatch: AppDispatch) => {
    try {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const contact: IContact = {...values, id: Date.now().toString(), avatar: ''}
          let localStorageData = localStorage.getItem('contacts')
          const contacts: IContact[] = JSON.parse(localStorageData || '[]')
          contacts.push(contact)

          localStorage.setItem('contacts', JSON.stringify(contacts))
          dispatch(ContactsActionCreators.setContacts(contacts))
          resolve(1)
        }, 1000)
      })
    } catch (err) {
      console.log(err)
    }
  }
}