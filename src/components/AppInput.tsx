import { InputBase } from '@material-ui/core'

type AppInputProps = {
  onChangeInput: (event: any) => void
}

export default function AppInput({ onChangeInput }: AppInputProps) {
  return (
    <InputBase
      onChange={(event) => onChangeInput(event)}
      placeholder="Enter a name here..."
    />
  )
}
