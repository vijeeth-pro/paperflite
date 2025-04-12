// import original module declarations
import 'styled-components';

// type
type FontStyle = {
  fontWeight: number;
  fontSize: number;
  fontFamily: string;
  color: string;
};


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      background: string;
      navBackground: string;
      rose: string
      white: string
      borderColor: string
    };
    font: {
      medium: FontStyle;
      subText: FontStyle;
      regular: FontStyle;
      h1: FontStyle;
      paragraph: FontStyle;
    };
    textColor: {
      black: string;
      grey: string;
    },
    breakPoint: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    }
  }
}