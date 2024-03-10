import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ForthSection from '../Components/ForthSection';

function OurGoals() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box>
      <ForthSection />
    </Box>
  );
}

export default OurGoals;
