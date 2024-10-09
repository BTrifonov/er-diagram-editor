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


    return (
        <Box
            sx={{
                bgcolor: theme.palette.primary.main,
                display:'flex',
                flexDirection: 'row', 
                justifyContent: 'space-evenly', 

                alignItems:'center',
                padding: '1em', 

                
                minWidth: '100%'
            }}
        >
            <Box>
                <TextField fullWidth
                    
                    size='medium'
                    variant='standard'
                    label='Entity name'
                    value={entityName}
                    disabled={!editMode}
                    onChange={(event)=>setEntityName(event.target.value)}
                >
                </TextField>  
            </Box>
            

            <ModeSelector
              editMode={editMode}
              setEditMode={triggerEditMode}

              visibilityMode={visibilityMode}
              setVisibilityMode={triggerVisibilityMode}
              />
        </Box>      
    )
}