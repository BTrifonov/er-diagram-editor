import * as React from 'react';

import { Select, SelectChangeEvent, Box, MenuItem, FormControl, InputLabel } from '@mui/material';

export interface AttributeKeyProps {
  attributeKey: string, 
  setAttributeKey: (key: string) => void
}


export default function AttributeKeyMenu({attributeKey, setAttributeKey}: AttributeKeyProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleChange = (event:SelectChangeEvent) => {
    console.log(event.target.value);
    setAttributeKey(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth:'5em'
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="attribute-key-label">Key</InputLabel>
        <Select
          id="attribute-key-select"
          labelId="attribute-key-label"
          label={'Attribute key'}

          variant='standard'
          size='small'
          
          open={isOpen}
          onClick={()=>setIsOpen((prev)=>!prev)}
          onChange={handleChange}

          value={attributeKey}
          autoWidth
        >
          <MenuItem value=" "> </MenuItem>
          <MenuItem value="PK">PK</MenuItem>
          <MenuItem value="FK">FK</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
