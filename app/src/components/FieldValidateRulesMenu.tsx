import * as React from 'react';

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { FieldValidateRulesMenuProps } from "../types/propTypes";
import { CheckBox } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};



export default function FieldValidateRulesMenu({
    fieldValidateRules, setFieldValidateRules, 
    editMode, setEditMode
}:FieldValidateRulesMenuProps) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const validateRules:any[] = [];

    if(fieldValidateRules) {
        fieldValidateRules.forEach((fieldRule)=>{
            validateRules.push(
                <FormControlLabel
                    control={<CheckBox/>}
                    label={fieldRule}
                >
                </FormControlLabel>
            )
        })
    }

    function handleChange(event:SelectChangeEvent) {
        
        //TODO: How to update the validate rules
        console.log(event.target.value)
    }

    return (
        <Box
            sx={{
                width: 'fit-content'
            }}
        >
            <FormControl fullWidth>
                <InputLabel id='validate-rules-label'>Field validate rules</InputLabel>
                <Select
                    id='validate-rules-select'
                    labelId='validate-rules-label'
                    
                    variant='standard'
                    size='small'
                    disabled={!editMode}

                    open={isOpen && editMode}
                    onClick={(e)=> setIsOpen((prev)=>!prev)}
                    onChange={handleChange}

                    //value={fieldValidateRules!==undefined ? fieldValidateRules[0] : "Empty"}

                    autoWidth
                >
                    <FormGroup>
                        {validateRules}
                    </FormGroup>
                </Select>


            </FormControl>
        </Box>
    )
}