import { StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'styles/global.css'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
