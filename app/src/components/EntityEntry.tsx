import * as React from 'react';

import { Box, useTheme, TextField, Divider, Typography } from "@mui/material";

import AttributeTypeMenu from "./AttributeTypeMenu";
import ModeSelector from './ModeSelector';
import { EntityFieldProps } from '../types/entityTypes';


export default function EntityEntry({
    fieldName, setFieldName,
    fieldType, setFieldType, 
    fieldValidateRules, setFieldValidateRules
}:EntityFieldProps) {

    const theme = useTheme();

    React.useEffect(()=>{
        //always start with visibility mode
        setEditMode(false);
        setVisibilityMode(true);
    }, []);


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

        {/*TODO: Logic for the display of keys depends on relationships, implement */}
           {/* {editMode && 
                <AttributeKeyMenu attributeKey={attributeKey} setAttributeKey={setAttributeKey}/>
           }

           {visibilityMode &&
                <Typography>
                    {attributeKey}
                </Typography>
           } */}

            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />

           {/* ------------------------------------------------------------------------------*/}
            {
                <TextField
                    size='small'
                    variant='standard'
                    label={editMode ? 'Field name':fieldName}
                    placeholder={fieldName}
                    draggable={editMode ? false:true}
                    disabled= {editMode ? false:true}
                    onChange={(event)=>setFieldName(event.target.value)}
                    sx={{
                        textAlign:'center',
                        borderRadius: '0.5em', 
                        margin: '0.5em'
                    }}
                >
                </TextField> 
            }
{/* 
            {visibilityMode &&
                <Typography>
                    {fieldName}
                </Typography>
            } */}

            {/* ------------------------------------------------------------------------------*/}

            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />

            {
                <AttributeTypeMenu fieldType={fieldType} setFieldType={setFieldType} disabled={visibilityMode}/>
            }

            {/* {visibilityMode &&
                <Typography>
                    {fieldType}
                </Typography>
            }
         */}
            <ModeSelector 
                editMode={editMode}
                setEditMode={setEditMode}

                visibilityMode = {visibilityMode}
                setVisibilityMode={setVisibilityMode}
            />
        </Box>
    )
}