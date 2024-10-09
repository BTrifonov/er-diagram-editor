
import { colors, createTheme, OutlinedInput } from "@mui/material";

const lightInputGreen = '#9EFF9E'
const darkBackgroundBlue = '#003FBD'
const whiteText = 'white'

const lighterOrange = '#FFA500'
const moreLighterOrange = '#F9CD77'
const darkerOrange = '#F0A30A'

const activateInputTextFieldGreen = '#003300' 

export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: darkerOrange,
            light: moreLighterOrange,
            //everything else should be calculated automatically
            contrastText: 'white'
        },
    },
    components: {
        MuiTextField: {
        
            styleOverrides: {
                root: {
                    textDecorationColor: activateInputTextFieldGreen,
                
                    outlineColor: 'black'
                }, 
                
            }
        }, 
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: 'black'
                    }
                }
            }
        }, 
        MuiInputBase: {
            styleOverrides: {
                root: {
                  color:'black',
                  '&:before': {
                    color: 'black'
                  },
                  '&:after': {
                    color: 'black'
                  }
                }
            }
        }, 
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    color:'black'
                }
            }
        },
    }
})