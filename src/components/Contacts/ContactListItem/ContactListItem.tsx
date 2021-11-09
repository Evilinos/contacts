import React, { FC, memo, MouseEventHandler, useRef } from 'react'
import { IContact } from '../../../models/IContact'
import { Avatar, ListItem, ListItemText } from '@mui/material'
import ContactMenu from './ContactMenu'
import styles from './ContactMenu.module.scss'
import { useActions } from '../../../hooks/useActions'
import { RoutesEnum } from '../../../routes'

interface IProps extends IContact {

}

const ContactListItem: FC<IProps> = ({id, firstname, lastname, middlename, email, avatar, phone}) => {
  const fullName = `${firstname} ${lastname} ${middlename}`
  const menuRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLLIElement>(null)
  const {push} = useActions()

  const clickHandler: MouseEventHandler<HTMLLIElement> = ({target}) => {
    if (target === menuRef.current || menuRef.current!.contains(target as Node)) return
    if (target !== wrapperRef.current && !wrapperRef.current!.contains(target as Node)) return

    push(RoutesEnum.contact + '/' + id)
  }

  return (
    <ListItem className={styles.listItem} ref={wrapperRef} onClick={clickHandler}>
      <Avatar alt={fullName} src={avatar} sx={{width: 50, height: 50, marginRight: 2}} />
      <ListItemText primary={`${firstname} ${lastname}`} sx={{maxWidth: 335, minWidth: 335}} />
      <ListItemText primary={phone} sx={{maxWidth: 335, minWidth: 335}} />
      <ListItemText primary={email} sx={{maxWidth: 335, minWidth: 335}} />
      <ContactMenu ref={menuRef} />
    </ListItem>
  )
}

export const ContactListItemMemoized = memo(ContactListItem)