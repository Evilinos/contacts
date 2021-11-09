import React, { FC, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ContactListItem } from './ContactListItem'
import { Button, List, ListItem, ListItemText } from '@mui/material'
import { AddContactModal } from '../AddContactModal'

export const Contacts: FC = () => {
  const {contacts} = useTypedSelector(state => state.contacts)
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary='' sx={{maxWidth: 50, minWidth: 50, marginRight: 2}} />
          <ListItemText primary='Full Name' sx={{maxWidth: 335, minWidth: 335}} />
          <ListItemText primary='Phone number' sx={{maxWidth: 335, minWidth: 335}} />
          <ListItemText primary='Email' sx={{maxWidth: 300, minWidth: 300}} />
          <Button onClick={() => setIsAddPopupOpen(true)}>Add</Button>
        </ListItem>
        {contacts.map(contact => <ContactListItem key={contact.id} {...contact} />)}
      </List>
      <AddContactModal open={isAddPopupOpen} onClose={() => setIsAddPopupOpen(false)} />
    </>
  )
}