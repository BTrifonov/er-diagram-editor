import * as React from 'react';

import { Box, useTheme, TextField, Divider, Typography } from "@mui/material";


import ModeSelector from './ModeSelector';
import { EntityFieldProps } from '../types/entityTypes';


import FieldNameMenu from './FieldNameMenu';
import FieldTypeMenu from './FieldTypeMenu';
import FieldKeyMenu from './FieldKeyMenu';
import FieldValidateRulesMenu from './FieldValidateRulesMenu';


//TODO: MUI dividers probably not the best solution in dragging and panning context
//TODO: Consider using something simpler as svgs
export default function EntityField({
    fieldName, setFieldName,
    fieldType, setFieldType, 
    fieldValidateRules, setFieldValidateRules, 
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
                backgroundColor: theme.palette.background.paper,

                //height determined by the height of the corresponding EntityFieldNode
                height: '100px',
                width: '500px',
                
                borderBottom: '2px solid black',
                borderLeft: '2px solid black',
                borderRight: '2px solid black',

                display: 'flex', 
                flexDirection: 'row',

                alignItems: 'center',
                justifyContent: 'space-between',
                
                paddingTop: '1%',
                paddingBottom: '1%' 
                 
            }}
        >
            <Box
                sx={{
                    width: '10%',
                    marginLeft: '2%'
                }}
            >
                <FieldKeyMenu
                    fieldKey=' '
                    setFieldKey={(fieldKey:string)=>console.log(fieldKey)}

                    editMode={editMode}
                    setEditMode={setEditMode}
                >
                </FieldKeyMenu>
            </Box>
          
            {/* ------------------------------------------------------------------------------*/}
            {/* <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{marginLeft: '1%', marginRight: '1%', backgroundColor: 'black'}}
            /> */}
           {/* ------------------------------------------------------------------------------*/}
            <Box
                sx={{
                    width: '20%'
                }}
            >
                <FieldNameMenu
                    fieldName={fieldName}
                    setFieldName={setFieldName}

                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Box>
            {/* ------------------------------------------------------------------------------*/}            
            {/* <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{marginLeft: '1%', marginRight: '1%', backgroundColor: 'black', willChange:'transform'}}
            />
             */}
            {/* ------------------------------------------------------------------------------*/}
            <Box
                sx={{width:'20%'}}
            >
                <FieldTypeMenu
                    fieldType={fieldType} 
                    setFieldType={setFieldType} 
                    
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
                
            </Box>
            
            {/* ------------------------------------------------------------------------------*/}
            {/* <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{marginLeft: '1%', marginRight: '1%', backgroundColor: 'black'}}
            />  */}
            {/* ------------------------------------------------------------------------------*/}
            <Box sx={{width: '20%'}}>
                <FieldValidateRulesMenu
                    fieldValidateRules={fieldValidateRules}
                    setFieldValidateRules={setFieldValidateRules}

                    editMode={editMode}
                    setEditMode={setEditMode}
                
                />
            </Box>
      

            {/* ------------------------------------------------------------------------------*/}
            {/* <Divider 
                orientation="vertical"
                variant="middle" 
                flexItem
                sx={{marginLeft: '1%', marginRight: '1%', backgroundColor: 'black'}}
            /> 
            
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