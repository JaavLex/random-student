import {
  createTheme,
  PaletteOptions,
  responsiveFontSizes,
} from '@material-ui/core'

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#f1f000',
  },
  background: {
    default: '#0f131a',
    paper: '#1a1d24',
  },
}

function createBaseTheme() {
  return createTheme({
    palette,
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
    },
    spacing: 8,
    components: {
      MuiTypography: {
        defaultProps: {
          color: 'textPrimary',
        },
      },
    },
  })
}

const theme = responsiveFontSizes(createBaseTheme())

export default theme
