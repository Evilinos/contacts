import React, { FC } from 'react'
import { IContact } from '../../models/IContact'
import { Avatar, ListItem, ListItemText } from '@mui/material'
import ContactMenu from './ContactMenu'
import styles from './ContactMenu.module.scss'

interface IProps extends IContact {

}

export const ContactListItem: FC<IProps> = ({id, firstname, lastname, middlename, email, avatar, phone}) => {
  const fullName = `${firstname} ${lastname} ${middlename}`
  return (
    <ListItem className={styles.listItem}>
      <Avatar alt={fullName} src="/static/images/avatar/1.jpg" sx={{width: 50, height: 50, marginRight: 2}} />
      <ListItemText primary={`${firstname} ${lastname}`} />
      <ListItemText primary={phone} />
      <ListItemText primary={email} />
      <ContactMenu />
    </ListItem>
  )
}