import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import VideoPlayer from './home/VideoPlayer';

function ThirdSection() {
  return (
    <Box textAlign={'center'} px={{ base: 5, md: 20 }}>
      <Heading>Why Us</Heading>
      <Text
        width={{ base: '100%', md: '70%' }}
        color={'#707070'}
        margin={'auto'}
        mt={3}
      >
        At Learning Exp. We Are Committed To Providing You With A Superior
        Learning <br /> Experience That Empowers You To Achieve Your Goals. Join
        Us Today And <br />
        Embark On A Journey Of Discovery, Growth, And Success.
      </Text>
      <SimpleGrid
        my={10}
        gap={{ base: 0, md: 10 }}
        columns={{ base: 1, md: 1, lg: 2 }}
        width={{ base: '90%', md: '85%' }}
        margin={'auto'}
      >
        <Box>
          <VideoPlayer />
        </Box>
        <Box mt={{ base: 10, md: 20 }} textAlign={'left'}>
          <Heading size={{ base: 'sm', md: 'lg' }}>
            Crafting Your Dream Career: Building a Path You Love with us
          </Heading>
          <Text mt={5} color={'#707070'}>
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </Text>
          <Text mt={5} color={'#707070'}>
            Our Platform Is Designed To Empower Learners Like You To Excel In
            Today’s Dynamic World.
          </Text>
          <Button
            bg="#FFEC05"
            _hover={{ cursor: 'pointer' }}
            mt={5}
            borderRadius={20}
            px={{ base: 6, md: 10 }}
          >
            Get More
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ThirdSection;
