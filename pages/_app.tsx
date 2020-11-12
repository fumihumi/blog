import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
} as const


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

type AppTheme = typeof theme
// NOTE: https://github.com/styled-components/styled-components/issues/1589#issuecomment-456641381
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme { }
}

