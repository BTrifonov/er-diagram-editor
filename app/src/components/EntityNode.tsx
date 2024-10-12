import { Entity } from "../types/entityTypes"
import EntityFieldNode from "./EntityFieldNode"
import React from "react";

import { Box, TextField, useTheme } from "@mui/material";
import ModeSelector from "./ModeSelector";


interface EntityData {
    entity: Entity
}

interface EntityFlowNodeProps {
    id: string,
    data: EntityData,
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
    const [entityCount, setEntityCount] = React.useState<number>(0);

    React.useEffect(()=>{
        if(data && data.entity)
            setEntityNameInput(data.entity.name)
    }, []);


    function triggerEditMode() {
        setVisibilityMode(false);
        setEditMode(true);

    }

    function triggerVisibilityMode() {
        setEditMode(false);
        setVisibilityMode(true);
    }

    React.useEffect(()=>{
        if(data && data.entity && data.entity.fields)
            setEntityCount(data.entity.fields.length);
    }, []);

    //An EntityFlowNode comprises many EntityFieldNodes
    return (
        <>
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
                    onChange={(event)=>setEntityNameInput(event.target.value)}
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
            {
                data && data.entity && data.entity.fields && 
                
                    data.entity.fields.map((field) => {
                        entityFieldId++;  // Incrementing entityFieldId in each iteration
                        return (
                            <EntityFieldNode
                                key={entityFieldId}  // It's also a good idea to use entityFieldId as the key
                                id={entityFieldId.toString()}
                                parentId={id}
                                data={field}
                                isConnectable={isConnectable}
                            />
                        );
                })   
            }
        </>
    )
}