import { Box, useTheme, TextField } from "@mui/material";
import KeyAttributeMenu from "./KeyAttributeMenu";


export default function EntityRow() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: theme.palette.primary.light,
                height: 'fit-content', 
                width: 'fit-content', 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center'
            }}
        >
           <KeyAttributeMenu/>
           <TextField
                variant='filled'
                label='Attribute name'
                sx={{
                    textAlign:'center',
                    borderRadius: '0.5em', 
                    margin: '0.5em'
                }}
                slotProps={{
                    input: {
                        style: {
                            textAlign:'center',
                            //pointerEvents: isFocused ? 'auto' : 'none'
                        }
                    }
                }}
            >
            </TextField>   



        </Box>
    )
}