import React, { useState } from 'react'

import './App.css'
import Editor from './components/Editor'
import { createTheme, SelectChangeEvent, ThemeProvider } from '@mui/material'
import { orangeTheme } from './themes/orangeTheme'

function App() {
  const [count, setCount] = useState(0)

  const defaultTheme = createTheme();


  return (
    <ThemeProvider theme={defaultTheme}>
      <Editor/>
    </ThemeProvider>
  )
}

export default App
