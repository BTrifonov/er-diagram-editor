import { useState } from 'react'

import './App.css'
import Editor from './components/Editor'
import { createTheme, SelectChangeEvent, ThemeProvider } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Editor/>
    </ThemeProvider>
  )
}

export default App
