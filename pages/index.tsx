import { Box } from '@material-ui/system'
import AppTitle from 'components/AppTitle'
import PlayerCardList from 'components/PlayerCardList'
import React, { useState } from 'react'

export default function index() {
  const [pList, setPList] = useState([
    {
      id: 1,
      username: 'jeanmich',
    },
    {
      id: 2,
      username: 'Xx_plao',
    },
    {
      id: 3,
      username: 'AAAAAAHHHH',
    },
    {
      id: 4,
      username: 'Melvyn',
    },
    {
      id: 5,
      username: 'Ana',
    },
    {
      id: 6,
      username: 'Alex',
    },
    {
      id: 7,
      username: 'Luca',
    },
  ])

  function removeUser(playerId: number) {
    const tempPList = [...pList]
    pList.forEach(
      (e: any, i: any) => e.id == playerId && tempPList.splice(i, 1)
    )
    setPList(tempPList)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <AppTitle title="Random Student by AlexTheBest" />
      <PlayerCardList
        players={pList}
        onRemove={(id) => removeUser(id)}
      ></PlayerCardList>
    </Box>
  )
}
