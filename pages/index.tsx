import { Box } from '@material-ui/system'
import { Modal } from '@material-ui/core'
import AppAddUser from 'components/AppAddUser'
import AppButton from 'components/AppButton'
import AppTitle from 'components/AppTitle'
import PlayerCardList from 'components/PlayerCardList'
import React, { useState } from 'react'

export default function index() {
  const [pList, setPList] = useState([])
  const [uIndex, setUIndex] = useState(1)
  const [sUser, setSUser] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function removeUser(playerId: number) {
    const tempPList = [...pList]
    pList.forEach(
      (e: any, i: any) => e.id == playerId && tempPList.splice(i, 1)
    )
    setPList(tempPList)
  }

  function addUser(userName: string) {
    const tempPList = [...pList]
    tempPList.push({ id: uIndex, username: userName })
    setPList(tempPList)
    setUIndex(uIndex + 1)
  }

  function selectUser() {
    setSUser(pList[Math.floor(Math.random() * pList.length)].username)
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
      {pList.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <PlayerCardList players={pList} onRemove={(id) => removeUser(id)} />
          <AppButton text="Choose random guy" onClickButton={handleOpen} />
        </Box>
      )}

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
