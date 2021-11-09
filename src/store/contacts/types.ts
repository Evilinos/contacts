import { IContact } from "../../models/IContact";

export interface ContactsState {
  contacts: IContact[],
  isLoading: boolean,
  error: string
}

export enum ContactsActionsEnum {
  SET_CONTACTS = "SET_CONTACTS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR"
}

export interface SetContactsAction {
  type: ContactsActionsEnum.SET_CONTACTS;
  payload: IContact[]
}

export interface SetIsLoadingAction {
  type: ContactsActionsEnum.SET_IS_LOADING;
  payload: boolean
}

export interface SetErrorAction {
  type: ContactsActionsEnum.SET_ERROR;
  payload: string
}

export type ContactsAction =
  SetContactsAction | SetIsLoadingAction | SetErrorAction