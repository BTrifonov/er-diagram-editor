import { TextField } from "@mui/material";

import { FieldNameMenuProps } from "../types/propTypes";

/**
 * Component responsible for handling an entity field name menu
 */
export default function FieldNameMenu({fieldName, setFieldName, editMode, setEditMode}:FieldNameMenuProps) {
    return(
        <TextField
            required
            size='small'
            variant='standard'
            label='Field name'
            value={fieldName}
            disabled= {editMode ? false:true}
            onChange={(event)=>setFieldName(event.target.value)}
        >
        </TextField>
    );
}