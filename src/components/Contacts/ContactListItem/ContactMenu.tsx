import React, { MouseEventHandler } from 'react'
import { IconButton, ListItemText, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const options = [
  'Edit',
  'Delete',
]

const ITEM_HEIGHT = 48

const ContactMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick: MouseEventHandler<HTMLButtonElement> = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <ListItemText sx={{maxWidth: 40}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </ListItemText>
  )
}

export default ContactMenu