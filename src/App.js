import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/home/Navbar';
import { customTheme } from './Theme/theme';

import Footer from './Components/Footer';
import PublicRoutes from './Routes/PublicRoutes';
import { useLocation } from 'react-router-dom';

function App() {
  const footerLocation = useLocation();

  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <PublicRoutes />
      {footerLocation.pathname === '/account-page' ? null : <Footer />}
    </ChakraProvider>
  );
}

export default App;
