import { useState } from 'react'
import { UI } from './components/UI/UI'
import {Grid} from '@mui/material'
import {UIProvider} from './context/UIContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UIProvider>
      <Grid container spacing={0}>
        <Grid item xs={8}> 
          Here will be pixi application
        </Grid>
        <UI></UI>
      </Grid>
    </UIProvider>

  )
}

export default App
