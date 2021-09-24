import { Box } from '@material-ui/system'
import PlayerCardList from 'components/PlayerCardList'
import React from 'react'

const testPList = [
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
]

function removeUser(playerId: number) {
  testPList.forEach((e, i) => e.id == playerId && testPList.splice(i, 1))
}

export default function index() {
  //const [pList, setPList] = useState(testPList)
  return (
    <Box display="flex" justifyContent="center">
      <PlayerCardList
        players={testPList}
        onRemove={(id) => removeUser(id)}
      ></PlayerCardList>
    </Box>
  )
}
