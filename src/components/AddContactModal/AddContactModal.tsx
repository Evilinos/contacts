import React, { FC } from 'react'
import { Box, Modal, Typography } from '@mui/material'

interface IProps {
  open: boolean,
  onClose: () => void
}

export const AddContactModal: FC<IProps> = ({open, onClose}) => {
  return (
    <Modal open={open}
           onClose={onClose}>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}