import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function ContactUs() {
  return (
    <Box
      p={{ base: 5, md: 10 }}
      bg="#333697"
      color={'white'}
      borderRadius={10}
      width={{ base: '90%', md: '80%', lg: '60%' }}
      margin={'auto'}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center" gap={5}>
        <Box>
          <Heading fontWeight={600}>Contact Us</Heading>
          <Text mt={5}>
            There are many variations of passages of Lorem Ipsum but the
            majority have suffered alteration.
          </Text>
        </Box>
        <Flex
          bg={'white'}
          borderRadius={40}
          height="60px"
          p={4}
          alignItems={'center'}
          width={'100%'}
        >
          <Input
            placeholder="Email here"
            variant={'unstyled'}
            border={'none'}
            outline={'none'}
            color={'#7C7C7C'}
          />
          <Button bg="#FFEC05" borderRadius={20} width={'30%'}>
            Send
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default ContactUs;
