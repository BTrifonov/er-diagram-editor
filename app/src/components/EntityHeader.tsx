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
                justifyContent: 'space-between', 
                

                alignItems:'center',
                padding: '1em', 

                minHeight: 'fit-content', 
                minWidth: '100%', 
                
                height: '60px',
                transition: 'height 0.8s ease'
            }}
        >

            {editMode &&
                <Box sx={{marginLeft: '35%'}}>
                    <TextField
                        size='small'
                        variant='standard'
                        label='Entity'
                        value={entityName}
                        onChange={(event)=>setEntityName(event.target.value)}
                        sx={{
                            textAlign:'center',
                            borderRadius: '0.5em', 
                            margin: '0.5em'
                        }}
                        slotProps={{
                            input: {
                                style: {
                                    textAlign:'center'
                                }
                            }
                        }}
                    >
                    </TextField>  
                </Box>
            }

            {visibilityMode &&
                <Box sx={{marginLeft: '35%'}}>
                    <Typography>
                        {entityName}
                    </Typography>   
                </Box>
            }

            <ModeSelector
              editMode={editMode}
              setEditMode={triggerEditMode}

              visibilityMode={visibilityMode}
              setVisibilityMode={triggerVisibilityMode}
              />
        </Box>      
    )
}