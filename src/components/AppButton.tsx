import { Button } from '@material-ui/core'

type AppButtonProps = {
  text: string
  onClickButton: () => void
}

export default function AppButton({ text, onClickButton }: AppButtonProps) {
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
