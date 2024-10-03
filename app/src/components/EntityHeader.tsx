import * as React from 'react';
import { Box,  TextField,  useTheme } from "@mui/material";

/**
 * Header of an ER-entity element
 *
 */
export default function EntityHeader() {
    const theme = useTheme();
    const [headerInput, setHeaderInput] = React.useState<string>('');

    function handleHeaderInput(event: React.ChangeEvent<HTMLInputElement>) {
        setHeaderInput(event.target.value);
    }
    
    return (
        <Box
            sx={{
                bgcolor: theme.palette.primary.dark,
            }}
        >
            <TextField
                variant='filled'
                label='Entity'
                value={headerInput}
                onChange={handleHeaderInput}
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