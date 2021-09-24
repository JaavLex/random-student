import { Button } from '@material-ui/core'

type AppTitleProps = {
  text: string
  onClickButton: () => void
}

export default function AppTitle({ text, onClickButton }: AppTitleProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => onClickButton()}
    >
      {text}
    </Button>
  )
}
