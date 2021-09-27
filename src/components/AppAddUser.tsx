import AppInput from './AppInput'
import AppButton from './AppButton'
import { Box } from '@material-ui/system'
import React from 'react'

type AppAddUserProps = {
  onAdd: (uName: string) => void
}

export default function AppAddUser({ onAdd }: AppAddUserProps) {
  let userName = ''
  function saveUserName(username: string) {
    userName = username
  }
  return (
    <Box
      maxWidth="600px"
      display="flex"
      flexDirection="row"
      bgcolor="background.paper"
      padding={1}
      borderRadius={2}
    >
      <AppInput onChangeInput={(event) => saveUserName(event.target.value)} />
      <AppButton text="Add person" onClickButton={() => onAdd(userName)} />
    </Box>
  )
}
