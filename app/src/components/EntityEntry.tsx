import * as React from 'react';

import { Box, useTheme, TextField, Divider, Typography } from "@mui/material";
import AttributeKeyMenu from "./AttributeKeyMenu";
import AttributeTypeMenu from "./AttributeTypeMenu";
import ModeSelector from './ModeSelector';

/**
 * Each entry should pass on its own props for edit and visibility mode
 *  */
export interface EntityEntryProps {
    attributeKey: string,
    setAttributeKey: (attributeKey: string) => void, 

    attributeName: string, 
    setAttributeName: (attributeName: string) => void,

    attributeType: string, 
    setAttributeType: (attributeType: string) => void
}


export default function EntityEntry({
    attributeKey, setAttributeKey,
    attributeName, setAttributeName, 
    attributeType, setAttributeType
}:EntityEntryProps) {

    const theme = useTheme();

    const [editMode, setEditMode] = React.useState<boolean>(false);
    const [visibilityMode, setVisibilityMode] = React.useState<boolean>(false);

    return (
        <Box
            sx={{
                bgcolor: theme.palette.primary.light,
                //minHeight: 'fit-content', 
                //minWidth: 'fit-content', 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between', 
                height: '40px', 
                padding: '1em'
            }}
        >

           {editMode && 
                <AttributeKeyMenu attributeKey={attributeKey} setAttributeKey={setAttributeKey}/>
           }

           {visibilityMode &&
                <Typography>
                    {attributeKey}
                </Typography>
           }

            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />

           {/* ------------------------------------------------------------------------------*/}
            {editMode &&
                <TextField
                    size='small'
                    variant='standard'
                    label='Attribute name'
                    onChange={(event)=>setAttributeName(event.target.value)}
                    sx={{
                        textAlign:'center',
                        borderRadius: '0.5em', 
                        margin: '0.5em'
                    }}
                >
                </TextField> 
            }

            {visibilityMode &&
                <Typography>
                    {attributeName}
                </Typography>
            }

            {/* ------------------------------------------------------------------------------*/}

            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />

            {editMode &&
                <AttributeTypeMenu attributeType={attributeType} setAttributeType={setAttributeType}/>
            }

            {visibilityMode &&
                <Typography>
                    {attributeType}
                </Typography>
            }
        
            <ModeSelector 
                editMode={editMode}
                setEditMode={setEditMode}

                visibilityMode = {visibilityMode}
                setVisibilityMode={setVisibilityMode}
            />
        </Box>
    )
}