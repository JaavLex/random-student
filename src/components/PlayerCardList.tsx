import { Box } from '@material-ui/core'
import Player from 'types/Player.type'
import PlayerCard from './PlayerCard'

type PlayerCardListProps = {
  players: Player[]
  onRemove?: (id: number) => void
}

export default function PlayerCardList({
  players,
  onRemove,
}: PlayerCardListProps) {
  return (
    <Box
      width={600}
      padding={1}
      height="100%"
      overflow="hidden scroll"
      bgcolor="background.paper"
      borderRadius={8}
    >
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {players &&
          players.map((player) => {
            return (
              <Box key={player.id}>
                <PlayerCard
                  name={player.username}
                  avatar={
                    'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                  }
                  onDelete={() => onRemove?.(player.id)}
                />
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}
