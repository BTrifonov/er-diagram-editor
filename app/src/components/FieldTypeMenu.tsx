import * as React from 'react';

import { Box, FormControl, InputLabel, Select, useTheme, SelectChangeEvent, MenuItem } from "@mui/material";
import { FieldTypeMenuProps } from '../types/propTypes';

/**
 * TODO: Limit the height of the select dropdown, provide scrollable option
 * @param param0 
 * @returns 
 */
export default function FieldTypeMenu({fieldType, setFieldType, editMode, setEditMode}:FieldTypeMenuProps) {
    const theme = useTheme();
    
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleChange = (event:SelectChangeEvent) => {
        //Close drop down menu
        setIsOpen(false);

        setFieldType(event.target.value);
      };
    

    return (
        <Box
            sx={{
                //TODO: Set min and max width
                width: 'fit-content',
                minWidth: '8em'
            }}
        >
            <FormControl fullWidth>
            <InputLabel id="attribute-type-label">Field type</InputLabel>
                <Select
                    id='attribute-type-select'
                    labelId='attribute-type-label'
                    
                    variant='standard'
                    size='small'
                    disabled={!editMode}

                    open={isOpen && editMode}
                    onClick={(e)=> setIsOpen((prev)=>!prev)}
                    onChange={handleChange}

                    value={fieldType}

                    autoWidth
                    sx={{
                        maxHeight: '50px', 
                        overflowY: 'scroll'
                    }}
                >
                    <MenuItem value={fieldType}>{fieldType}</MenuItem>
                    <MenuItem value="INTEGER">INTEGER</MenuItem>
                    <MenuItem value="NUMBER">NUMBER</MenuItem>
                    <MenuItem value="VARCHAR">VARCHAR</MenuItem>
                    <MenuItem value="DATE">DATE</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )
}