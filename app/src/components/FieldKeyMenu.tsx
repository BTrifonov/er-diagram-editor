import * as React from 'react';

import { Select, SelectChangeEvent, Box, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FieldKeyMenuProps } from '../types/propTypes';

export default function FieldKeyMenu({fieldKey, setFieldKey, editMode, setEditMode}: FieldKeyMenuProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function handleChange(event: SelectChangeEvent) {
    //Close drop down menu
    setIsOpen(false);

    setFieldKey(event.target.value);
  }

  //Important, apply variant and size only to form control
  return (
      <FormControl variant='filled' size='small' fullWidth>
        <InputLabel id="attribute-key-label">Key</InputLabel>
        <Select
          id="attribute-key-select"
          labelId="attribute-key-label"
          label={'Attribute key'}

          value={fieldKey}
          
          open={isOpen && editMode}
          onClick={()=>setIsOpen((prev)=>!prev)}
          onChange={handleChange}

          disabled={!editMode}
          autoWidth
        >
          <MenuItem value={fieldKey}> </MenuItem>
          <MenuItem value="PK">PK</MenuItem>
          <MenuItem value="FK">FK</MenuItem>
        </Select>
      </FormControl>
  );
}
