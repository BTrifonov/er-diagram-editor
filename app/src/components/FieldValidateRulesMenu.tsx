import * as React from 'react';

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, ListItemText, MenuItem, OutlinedInput, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { FieldValidateRulesMenuProps } from "../types/propTypes";
import { CheckBox } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
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

    function handleChange(event:SelectChangeEvent<string[]>) {
        
        //TODO: How to update the validate rules
        console.log(event.target.value)
        return;
    }

    //TODO: Handle Field validate rules
    //TODO: If needed, try to create similar appearance to variant 'filled'
    return (
        <FormControl fullWidth>
            <InputLabel id="validate-rules-checkbox-label">Field rules</InputLabel>
            <Select
                labelId="validate-rules-checkbox-label"
                id="validate-rules-checkbox"
                multiple
                value={fieldValidateRules || []}
                
                onChange={handleChange}

                onClick={()=>setIsOpen((prev)=>!prev)}


                input={<OutlinedInput label="Tag" />}
                renderValue={(selected: string[]) => selected.join(', ')}
                MenuProps={MenuProps}
                open={editMode && isOpen}
                disabled={!editMode}
            >
                {fieldValidateRules &&
                fieldValidateRules.map((fieldRule) => (
                <MenuItem key={fieldRule} value={fieldRule}>
                    <Checkbox checked={fieldValidateRules.includes(fieldRule)} />
                    <ListItemText primary={fieldRule} />
                </MenuItem>
                ))
            }
                </Select>
        </FormControl>
    )
}