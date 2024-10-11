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
    

    //TODO: The select menu should not change its width, based on what is selected
    return (
            <FormControl variant='filled' size='small' fullWidth>
            <InputLabel id="attribute-type-label">Field type</InputLabel>
                <Select
                    id='attribute-type-select'
                    labelId='attribute-type-label'
                    
                    disabled={!editMode}

                    open={isOpen && editMode}
                    onClick={(e)=> setIsOpen((prev)=>!prev)}
                    onChange={handleChange}

                    autoWidth
                    value={fieldType}
                >
                    <MenuItem value={fieldType}>{fieldType}</MenuItem>
                    <MenuItem value="INTEGER">INTEGER</MenuItem>
                    <MenuItem value="NUMBER">NUMBER</MenuItem>
                    <MenuItem value="VARCHAR">VARCHAR</MenuItem>
                    <MenuItem value="DATE">DATE</MenuItem>
                </Select>
            </FormControl>
    )
}