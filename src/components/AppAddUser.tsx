import AppInput from './AppInput'
import AppButton from './AppButton'
import { Box } from '@material-ui/system'
import React, { useState } from 'react'

type AppAddUserProps = {
  onAdd: (uName: string) => void
}

export default function AppAddUser({ onAdd }: AppAddUserProps) {
  const [userName, setUserName] = useState('')
  return (
    <Box
      maxWidth="600px"
      display="flex"
      flexDirection="row"
      bgcolor="background.paper"
      padding={1}
      borderRadius={2}
    >
      <AppInput onChangeInput={(event) => setUserName(event.target.value)} />
      <AppButton text="Add person" onClickButton={() => onAdd(userName)} />
    </Box>
  )
}
