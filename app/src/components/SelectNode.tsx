
import { Box } from "@mui/material";
import AttributeKeyMenu from "./AttributeKeyMenu";



export default function SelectNode({data}:any) {
    return (
        <Box
            sx={{
                height: '250px', 
                width: '250px',
                bgcolor: 'red', 
                position: 'relative',
                overflow: 'visible'
            }}
        >
            <AttributeKeyMenu/>
        </Box>
    )
}