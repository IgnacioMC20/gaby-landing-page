import { lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>)
}
