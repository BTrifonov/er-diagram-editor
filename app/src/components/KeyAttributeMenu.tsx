import * as React from 'react';

import { Select, SelectChangeEvent, useTheme, Box, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function KeyAttributeMenu() {
  const theme=useTheme();
  const [attributeKey, setAttributeKey] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAttributeKey(event.target.value);
  };

  return (
    <Box>
    </Box>
  );
}
