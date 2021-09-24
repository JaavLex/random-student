import AppInput from './AppInput'
import AppButton from './AppButton'
import { Box } from '@material-ui/system'
import React from 'react'

type AppAddUserProps = {
  onAdd: () => void
}

export default function AppAddUser({ onAdd }: AppAddUserProps) {
  return (
    <Box
      maxWidth="600px"
      display="flex"
      flexDirection="row"
      bgcolor="background.paper"
      padding={1}
      borderRadius={8}
    >
      <AppInput />
      <AppButton text="Add person" onClickButton={() => onAdd()} />
    </Box>
  )
}
