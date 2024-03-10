import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ThirdSection from '../Components/ThirdSection';

function WhyUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      //   behavior: 'smooth',
    });
  }, []);

  return (
    <Box my={20} mt={120}>
      <ThirdSection />
    </Box>
  );
}

export default WhyUs;
