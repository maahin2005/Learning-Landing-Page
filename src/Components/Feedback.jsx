import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Feedback() {
  const Stars = () => {
    return (
      <Image
        width={{ base: '90%', md: '10%' }}
        src="/Images/star.svg"
        mt={10}
      />
    );
  };

  return (
    <Box height={'max-content'} mb={20}>
      <Box
        display={{ base: 'block', md: 'flex' }}
        width="70%"
        margin="auto"
        alignItems="center"
      >
        <Box
          width={{ base: '90%', sm: '70%', md: '100%' }}
          margin={'auto'}
          my={10}
        >
          <Heading>Our Students Feedback</Heading>
          <Text color={'#707070'} mt={5}>
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You
            <br /> To Achieve Your Goals. Join Us Today And Embark On A Journey
            Of Discovery, Growth, And Success.
          </Text>
        </Box>
        <Button
          display={{ base: 'none', md: 'flex' }}
          justifyContent={'space-between'}
          width={{ base: '30%', lg: '15%' }}
        >
          Read More <FaArrowRight />
        </Button>
      </Box>
      <Grid
        width={{ base: '90%', sm: '90%', md: '80%' }}
        margin={'auto'}
        gridTemplateColumns={{ base: '90%', md: '40% 60%', lg: '20% 70%' }}
        justifyContent={'center'}
      >
        <Box height={'max-content'}>
          <Image src="/Images/st-photo.png" width={'100%'} />
        </Box>
        <Box bg={'#EFEFFE'} boxShadow="0px 3px 6px #00000029">
          <Box
            width={{ base: '90%', sm: '70%', md: '70%', lg: '50%' }}
            margin={'auto'}
            p={{ base: 2, md: 2, lg: 2 }}
          >
            <Flex>
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </Flex>
            <Text color="#222D39">
              "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
              Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
              Quae Ab Illo Modi Tem."
            </Text>
            <Text fontWeight={700}>Riad Isalm</Text>
            <Text>
              Product Manager.<b style={{ color: '#333697' }}> @Learning.Com</b>
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Feedback;
