import { createGlobalStyle, ThemeProvider } from 'styled-components'

// https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.min.css
const GlobalStyle = createGlobalStyle`
  *,*::before,*::after { box-sizing: border-box }
  body,h1,h2,h3,h4,p,figure,blockquote,dl,dd { margin: 0 }
  ul[role="list"],ol[role="list"] { list-style: none }
  html { scroll-behavior: smooth }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  a:not([class]) { text-decoration-skip-ink: auto }
  img,picture {
    max-width: 100%;
    display: block
  }
  input,button,textarea,select{ font: inherit }
  @media(prefers-reduced-motion:reduce){
    *,*::before,*::after{
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important
    }
  }
`

const theme = {
  colors: {
    primary: '#57cc8a',
    gray: '#757575',
    bgDark: '#242930',
    bgDarkGray: 'rgba(175, 186, 196, .25)'
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

