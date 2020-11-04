import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';


const theme = responsiveFontSizes(createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 128
        }
    },
    overrides: {
        MuiButtonBase: {
            root: {
                "&:hover": {
                    backgroundColor: 'transparent !important',
                },
            }
        }
    //     MuiCssBaseline: {
    //         '@global': {
    //             '@font-face': Object.keys(fonts)
    //                 .map((font) => fonts[font])
    //         }
    //     }
    },
    palette: createPalette({
        type: 'dark',
        common: {
            transparent: 'transparent'
        },
        primary: {
            main: '#ff0000'
        },
        secondary: {
            main: '#fafafa'
        },
        background: {
            default: '#252525',
            paper: '#414141'
        }
    }),
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
    },
    typography: {
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600
    }
}));

export default theme;
