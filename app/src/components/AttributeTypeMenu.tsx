import * as React from 'react';

import { Box, FormControl, InputLabel, Select, useTheme, SelectChangeEvent, MenuItem } from "@mui/material";
import { AttributeTypeMenuProps } from '../types/entityTypes';



export default function AttributeTypeMenu({fieldType, setFieldType, disabled}:AttributeTypeMenuProps) {
    const theme = useTheme();
    
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleChange = (event:SelectChangeEvent) => {
        console.log(event.target.value);

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
            <InputLabel id="attribute-type-label">Attribute type</InputLabel>
                <Select
                    id='attribute-type-select'
                    labelId='attribute-type-label'

                    variant='standard'
                    size='small'

                    open={isOpen && !disabled}
                    onClick={()=>setIsOpen((prev)=>!prev)}
                    onChange={handleChange}

                    value={fieldType}
                    autoWidth
                    disabled={disabled}
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