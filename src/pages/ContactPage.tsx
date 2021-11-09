import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Avatar } from '@mui/material'

const ContactPage: FC = () => {
  const {id} = useParams<{ id: string }>()
  const {contacts} = useTypedSelector(state => state.contacts)
  const contact = contacts.find(contact => contact.id === id)!

  return (
    <div style={{marginTop: '2rem'}}>
      <Avatar alt={contact.firstname} src={contact.avatar} sx={{width: 100, height: 100}} />
      <div>
        First name: {contact.firstname}
      </div>
      <div>
        Last name: {contact.lastname}
      </div>
      <div>
        Middle name: {contact.middlename}
      </div>
      <div>
        Email: {contact.email}
      </div>
      <div>
        Phone number: {contact.phone}
      </div>
    </div>
  )
}

export default ContactPage