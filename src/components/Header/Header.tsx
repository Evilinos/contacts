import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { RoutesEnum } from '../../routes'
import { useActions } from '../../hooks/useActions'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export const Header: FC = () => {
  const pathname = useTypedSelector(state => state.router.location.pathname)
  const {push} = useActions()

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
      <Typography>Contacts</Typography>
      {pathname.includes(RoutesEnum.contact) &&
      <Button variant="outlined"
              onClick={() => push(RoutesEnum.index)}>
          Go back
      </Button>}
    </Box>
  )
}