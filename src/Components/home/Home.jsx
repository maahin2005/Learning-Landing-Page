import { Box } from '@chakra-ui/react';
import React from 'react';
import HomeFirst from './HomeFirst';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import ForthSection from '../ForthSection';
import Feedback from '../Feedback';
import ContactUs from '../ContactUs';

function Home() {
  return (
    <>
      <Box
        height={{ base: 'max-content', lg: '800px' }}
        position={'relative'}
        pt={20}
      >
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
        <HomeFirst />
      </Box>
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <Feedback />
      <Box position={'relative'} top={{ md: 100 }}>
        <ContactUs />
      </Box>
    </>
  );
}

export default Home;
