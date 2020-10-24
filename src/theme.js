import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';
// import fonts from './styles/fonts';

// import {
//
// } from './styles/colors';


const theme = responsiveFontSizes(createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 128
        }
    },
    // overrides: {
    //     MuiCssBaseline: {
    //         '@global': {
    //             '@font-face': Object.keys(fonts)
    //                 .map((font) => fonts[font])
    //         }
    //     }
    // },
    palette: createPalette({
        type: 'dark',
        common: {
            transparent: 'transparent'
        }
    }),
    typography: {
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600
    }
}));

export default theme;
