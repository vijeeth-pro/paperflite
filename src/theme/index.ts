import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    breakPoint: {
        xs: '0px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px'
    },
    common: {
        background: '#FAFAFA',
        navBackground: '#EFEFEF',
        rose: '#E51058',
        white: '#fff',
        borderColor: '#DBDBDB'
    },
    font: {
        medium: {
            fontWeight: 400,
            fontSize: 12,
            fontFamily: 'Gilroy-Medium',
            color: '#000000'
        },
        subText: {
            fontWeight: 400,
            fontSize: 16,
            fontFamily: 'Gilroy-Medium',
            color: '#000'
        },
        regular: {
            fontWeight: 400,
            fontSize: 12,
            fontFamily: 'Gilroy-Medium',
            color: '#717274'
        },
        h1: {
            fontFamily: 'Gilroy-Heavy',
            fontSize: 32,
            fontWeight: 400,
            color: '#121212'
            
        },
        paragraph: {
            fontFamily: 'Gilroy',
            fontSize: 12,
            fontWeight: 400,
            color: '#717274'
            
        }

    },
    textColor: {
        black: '#000',
        grey: '#717274'
    }
}