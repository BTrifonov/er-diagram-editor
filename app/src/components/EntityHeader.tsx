import * as React from 'react';
import { Box,  TextField,  Typography,  useTheme } from "@mui/material";

import ModeSelector from './ModeSelector';

/**
 * Declare type props as interface, export to seperate files lates
 */
export interface EntityHeaderProps {
    entityName: string, 
    setEntityName: (entityName: string) => void;
}


/**
 * Header of an ER-entity element
 * TODO : Adjust CSS-style, so that it looks a little bit better...
 */
export default function EntityHeader({
    entityName, setEntityName
    }: EntityHeaderProps) {

    const theme = useTheme();
    const [editMode, setEditMode] = React.useState<boolean>(false);
    const [visibilityMode, setVisibilityMode] = React.useState<boolean>(false);

    React.useEffect(()=>{
        //Always start with visibility mode
        //Idempotent operation, no need to clean up
        triggerVisibilityMode();

        console.log(theme.palette.primary.light)
    }, [])


    
    function triggerEditMode() {
        setVisibilityMode(false);
        setEditMode(true);

    }

    function triggerVisibilityMode() {
        setEditMode(false);
        setVisibilityMode(true);
    }

    //TODO: Is there a better way to position flex item in center? 
    return (
        <Box
            sx={{
                width: '500px',
                height: '100px',

                backgroundColor: theme.palette.background.paper,
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid',
                
                display:'flex',
                flexDirection: 'row', 
 
                alignItems: 'center',

            }}
        >
            <Box 
                sx={{
                    marginLeft: '25%',
                    minWidth: '50%'
                }}
            >
                <TextField fullWidth
                    sx={{
                        width: '100%'
                    }}
                    size='medium'
                    variant='filled'
                    label='Entity name'
                    value={entityName}
                    disabled={!editMode}
                    onChange={(event)=>setEntityName(event.target.value)}
                >
                </TextField>  
            </Box>
            
            <Box
                sx={{
                    marginLeft: 'auto',
                    marginTop: '5%',
                    marginBottom: '5%', 
                    marginRight: '1%',
                    minWidth: '10%'
                }}
            >
                <ModeSelector
                editMode={editMode}
                setEditMode={triggerEditMode}

                visibilityMode={visibilityMode}
                setVisibilityMode={triggerVisibilityMode}
                />
            </Box>
        </Box>      
    )
}