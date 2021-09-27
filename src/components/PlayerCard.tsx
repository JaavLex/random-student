import { Avatar, Box, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

type PlayerCardProps = {
  name: string
  avatar: string
  onDelete?: () => void
}

const iconSx = { color: 'common.white' }

export default function PlayerCard({
  name,
  avatar,
  onDelete,
}: PlayerCardProps) {
  return (
    <Box
      borderRadius="32px"
      maxWidth="300px"
      padding={1}
      margin={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.default"
    >
      <Box position="relative">
        <Avatar
          src={avatar}
          sx={{
            width: 48,
            height: 48,
            backgroundColor: (theme) => `${theme.palette.primary.dark}`,
            boxShadow: 5,
            overflow: 'visible',
            '&> img': {
              height: 48,
              width: 'auto',
              margin: 'auto',
              position: 'unset',
            },
          }}
        />
      </Box>

      <Typography
        color="textPrimary"
        sx={{
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ],
          fontSize: 20,
          width: '100%',
          fontWeight: 'bold',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: (theme) => `0 ${theme.spacing(1)}`,
        }}
      >
        {name}
      </Typography>
      <Box display="flex" alignItems="center">
        <Box
          component="button"
          padding={0}
          border={0}
          sx={{
            cursor: 'pointer',
          }}
          height={24}
          onClick={() => onDelete?.()}
          bgcolor="transparent"
        >
          <CloseIcon sx={iconSx} />
        </Box>
      </Box>
    </Box>
  )
}
