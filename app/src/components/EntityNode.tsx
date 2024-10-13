import { Entity } from "../types/entityTypes"
import EntityFieldNode from "./EntityFieldNode"
import React from "react";

import { Box, TextField, useTheme } from "@mui/material";
import ModeSelector from "./ModeSelector";


interface EntityFlowNodeProps {
    id: string,
    data: Entity,
    isConnectable: boolean
}

/**
 * React flow node component, encapsulating the component of an entity
 * @param param0 
 */
export function EntityNode({id, data, isConnectable}:EntityFlowNodeProps) {
    const theme = useTheme();

    const [editMode, setEditMode] = React.useState<boolean>(false);
    const [visibilityMode, setVisibilityMode] = React.useState<boolean>(false);
    const [entityNameInput, setEntityNameInput] = React.useState<string>("");

    let entityFieldId: number = 0;

    //on mount set entityData
    React.useEffect(()=>{
        if(data) {
            console.log("Check data in entity node:");
            console.log(data);
            
            setEntityNameInput(data.name);
        }
    })

    function triggerEditMode() {
        setVisibilityMode(false);
        setEditMode(true);

    }

    function triggerVisibilityMode() {
        setEditMode(false);
        setVisibilityMode(true);
    }

    //An EntityFlowNode comprises many EntityFieldNodes
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
                    value={entityNameInput}
                    disabled={!editMode}
                    onChange={(event)=> setEntityNameInput(event.target.value)}
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