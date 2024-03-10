import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import SecondSection from '../Components/SecondSection';

function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box p={10}>
      <Box width={'100%'} margin={'auto'} textAlign={'center'} mt={10}>
        <Heading size="lg" fontWeight={600} textDecoration={'underline'}>
          Our Services
        </Heading>
        <SecondSection />
      </Box>
    </Box>
  );
}

export default Service;