import { useCallback } from "react"
import {Handle, Position} from '@xyflow/react'
import { Box, Button, TextField } from "@mui/material";




export default function Entity({data}:any) {
    let hehe=data;


    return (
        <div>
            <Box
                sx={{
                    height: 'fit-content', 
                    width: 'fit-content', 
                    display: 'flex', 
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        display:'flex', 
                        flexDirection: 'row'
                    }}
                >
                    <Button>B</Button>
                    <TextField
                        variant="outlined"
                        placeholder="Entity name"
                    >
                    </TextField>
                </Box>

                <Box
                    sx={{
                        display: 'flex', 
                        flexDirection: 'row'
                    }}
                >
                    <Button>PK</Button>
                    <TextField></TextField>
                </Box>
            </Box>
        </div>
    );
}