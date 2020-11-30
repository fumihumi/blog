import { theme } from '../lib'

type AppTheme = typeof theme
// NOTE: https://github.com/styled-components/styled-components/issues/1589#issuecomment-456641381
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme { }
}
