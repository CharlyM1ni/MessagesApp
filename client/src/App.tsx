import { Button, ChakraProvider, Container, Stack } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import MessageField from './Components/MessageField'

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
      </Container>
      <MessageField/>
    </Stack>
  );
}

export default App
