import React from 'react';
import { ChakraProvider, Heading, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading textAlign={'center'}>Learning Landing Page</Heading>
    </ChakraProvider>
  );
}

export default App;
