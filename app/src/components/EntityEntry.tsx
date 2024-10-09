import * as React from 'react';

import { Box, useTheme, TextField, Divider, Typography } from "@mui/material";


import ModeSelector from './ModeSelector';
import { EntityFieldProps } from '../types/entityTypes';


import FieldNameMenu from './FieldNameMenu';
import FieldTypeMenu from './FieldTypeMenu';
import FieldKeyMenu from './FieldKeyMenu';
import FieldValidateRulesMenu from './FieldValidateRulesMenu';

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
                minWidth: '100%',

                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between', 
                height: '40px', 
                padding: '1em', 
            }}
        >

            <FieldKeyMenu
                fieldKey=' '
                setFieldKey={(fieldKey:string)=>console.log(fieldKey)}

                editMode={editMode}
                setEditMode={setEditMode}
            >

            </FieldKeyMenu>

            {/* ------------------------------------------------------------------------------*/}
            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />
           {/* ------------------------------------------------------------------------------*/}
            <FieldNameMenu
                fieldName={fieldName}
                setFieldName={setFieldName}

                editMode={editMode}
                setEditMode={setEditMode}
            />
            {/* ------------------------------------------------------------------------------*/}
            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />
            {/* ------------------------------------------------------------------------------*/}
            <FieldTypeMenu 
                fieldType={fieldType} 
                setFieldType={setFieldType} 
                
                editMode={editMode}
                setEditMode={setEditMode}
            />
            {/* ------------------------------------------------------------------------------*/}
            <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{margin: '0.5em'}}
            />

            {/* ------------------------------------------------------------------------------*/}
            <FieldValidateRulesMenu
                fieldValidateRules={fieldValidateRules}
                setFieldValidateRules={setFieldValidateRules}

                editMode={editMode}
                setEditMode={setEditMode}
            
            />

            {/* ------------------------------------------------------------------------------*/}
            <ModeSelector 
                editMode={editMode}
                setEditMode={setEditMode}

                visibilityMode = {visibilityMode}
                setVisibilityMode={setVisibilityMode}
            />
        </Box>
    )
}