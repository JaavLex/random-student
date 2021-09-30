import { Box } from '@material-ui/system'
import { Modal } from '@material-ui/core'
import AppAddUser from 'components/AppAddUser'
import AppButton from 'components/AppButton'
import AppTitle from 'components/AppTitle'
import PlayerCardList from 'components/PlayerCardList'
import React, { useState } from 'react'
import { useLocalStorageState } from 'hooks/useLocalStorageState'

export default function index() {
  const [lList, setLList] = useLocalStorageState(
    'jaavlex-randomstudent-list',
    []
  )

  const [uIndex, setUIndex] = useState(
    Math.floor((Math.random() * 10 * 10) ^ 20)
  )
  const [sUser, setSUser] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function removeUser(playerId: number) {
    const templList = [...lList]
    lList.forEach(
      (e: any, i: any) => e.id == playerId && templList.splice(i, 1)
    )
    setLList(templList)
  }

  function addUser(userName: string) {
    const templList = [...lList]
    templList.push({ id: uIndex, username: userName })
    setLList(templList)
    setUIndex(Math.floor((Math.random() * 10 * 10) ^ 20))
  }

  function selectUser() {
    setSUser(lList[Math.floor(Math.random() * lList.length)].username)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <AppTitle title="Random Student by AlexTheBest" />
      <AppAddUser onAdd={(uName) => addUser(uName)} />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <PlayerCardList players={lList} onRemove={(id) => removeUser(id)} />
        <AppButton text="Choose random guy" onClickButton={handleOpen} />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Please click the button"
      >
        <Box
          width="300px"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          top="44%"
          left="40%"
          flexDirection="column"
          bgcolor="background.paper"
          padding={1}
          borderRadius={2}
        >
          <AppButton text="CLICK" onClickButton={() => selectUser()} />
          {sUser && <AppTitle title={sUser} />}
        </Box>
      </Modal>
    </Box>
  )
}
