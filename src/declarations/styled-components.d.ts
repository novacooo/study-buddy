import 'styled-components';
import { ThemeType } from 'assets/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
