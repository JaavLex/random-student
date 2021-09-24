import { Box, Typography } from '@material-ui/core'

type AppTitleProps = {
  title: string
}

export default function AppTitle({ title }: AppTitleProps) {
  return (
    <Box
      borderRadius="32px"
      maxWidth="900px"
      padding={1}
      margin={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.default"
    >
      <Typography
        color="textPrimary"
        sx={{
          fontFamily: 'Brush Script MT',
          fontSize: 32,
          width: '100%',
          fontWeight: 'bold',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: (theme) => `0 ${theme.spacing(1)}`,
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}
