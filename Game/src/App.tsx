import './App.css'
import Gamegrid from './components/Gamegrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside'>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Gamegrid />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
