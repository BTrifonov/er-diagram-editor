import { useCallback } from "react"
import {Handle, Position} from '@xyflow/react'
import { Box, Button, TextField } from "@mui/material";
import EntityHeader from "./EntityHeader";
import EntityRow from "./EntityRow";




export default function Entity({data}:any) {
    let someData=data;

    return (
        <Box
            sx={{
                borderStyle: 'solid', 
                borderColor: 'black', 
                borderWidth: '1px',

                height: 'fit-content', 
                width: '80%', 

                display: 'flex', 
                flexDirection: 'column'
            }}
        >
            <EntityHeader/>
            <EntityRow/>
            
        </Box>
    );
}