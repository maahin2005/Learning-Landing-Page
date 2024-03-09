import React from 'react';
import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';
import VideoPlayer from './VideoPlayer';

export default function HomeFirst() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        width={{ base: '100%', sm: '90%', md: '80%' }}
        margin="auto"
        alignItems={'center'}
        p={2}
        justifyContent="space-between"
      >
        <Box zIndex={10} color={'white'} mt={{ base: 10, md: 20 }}>
          <Heading zIndex={20} size={{ base: 'md', md: 'xl' }} fontWeight={600}>
            We Create Learning Experience With Excellent Technology.
          </Heading>
          <Text
            my={6}
            fontSize={{ base: '.4rem', md: '1rem' }}
            fontWeight={600}
          >
            Unlimited Access To 100+ World-Class Courses, Hands-On <br />
            Projects, And Job-Ready Certificate Programs— <br /> All Included In
            Your Subscription
          </Text>
          <SimpleGrid
            width={'60%'}
            columns={{ base: 1, sm: 2 }}
            gap={5}
            alignItems={'center'}
            mt={10}
          >
            <Button
              bg={'#FFEC05'}
              colorScheme="yellow"
              variant={'unstyled'}
              px={{ base: 5, sm: 1 }}
              borderRadius={20}
              fontSize={{ base: '10px', sm: '.5rem' }}
              color={'black'}
            >
              Book Demo Class
            </Button>
            <Text
              width={'max-content'}
              fontWeight={600}
              zIndex={10}
              cursor={'pointer'}
              _hover={{
                color: '#FFEC05',
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
                borderBottom: '2px solid #FFEC05',
              }}
            >
              <Text display={'inline'} _hover={{}}>
                Explore More
              </Text>{' '}
              <b
                style={{
                  marginLeft: '10px',
                }}
              >
                &rarr;
              </b>
            </Text>
          </SimpleGrid>
        </Box>
        <Box width={'80%'} margin={'auto'}>
          <VideoPlayer />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

// //   <Image
// src="/Images/right-arrow.svg"
// alt="arrow"
// display={'inline'}
// _hover={{
//   color: '#FFEC05',
// }}
// />
