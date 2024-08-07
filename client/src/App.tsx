import { Button, ChakraProvider, Container, Stack } from '@chakra-ui/react'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
      <Button>Bisous</Button>
      </Container>
    </Stack>
  )
}

export default App
