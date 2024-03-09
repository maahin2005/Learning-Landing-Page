import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import HomeFirst from './Components/home/HomeFirst';
import SecondSection from './Components/SecondSection';
import { customTheme } from './Theme/theme';
import ThirdSection from './Components/ThirdSection';
import ForthSection from './Components/ForthSection';
import Feedback from './Components/Feedback';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box height={{ base: 'max-content', lg: '800px' }} position={'relative'}>
        <Box
          position={'absolute'}
          top={0}
          left={0}
          width={'100%'}
          height={'100%'}
          backgroundImage={'url(/Images/Home-bg-woman.png)'}
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          zIndex={0}
        />

        <Box
          position={'absolute'}
          top={0}
          left={0}
          width={'100%'}
          height={'100%'}
          background={'url(/svgs/purple-rectangle.svg)'}
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          zIndex={0}
        />
        <Navbar />
        <HomeFirst />
      </Box>
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <Feedback />
      <Box position={'relative'} top={{ md: 100 }}>
        <ContactUs />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
