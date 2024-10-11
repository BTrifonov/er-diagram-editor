
import { colors, createTheme, OutlinedInput } from "@mui/material";

const lightOrange = '#FFA64D'


/**
 * TODO: Definitely choose more approriate colors
 */
export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: lightOrange,
            //everything else should be calculated automatically
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides:{
                root: {
                    "&.Mui-focused": {
                        color: 'black'
                    },
                    textDecorationColor: 'white'
                }
            }
        },
        MuiInput: {
            //This style is applied, if we use TextField standard
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: 'black', // Default underline color
                      },
                      "&:after": {
                        borderBottomColor: 'black', // Underline color when focused
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottomColor: 'black', // Underline color on hover
                      },
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                input: {
                    color: 'black',
                    "&.Mui-focused": {
                        color: 'black'
                    }
                },
                root: {
                    color: 'black',
                }, 
                underline: {
                    "&:before": {
                        borderBottomColor: 'black', // Default underline color
                      },
                      "&:after": {
                        borderBottomColor: 'black', // Underline color when focused
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "black", // Underline color on hover
                      },
                }  
            }
        }
    }
})