import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function ContactUs({ columns }) {
  const [email, setEmail] = useState('');
  const msgToast = useToast();

  const handleSend = () => {
    if (email.trim() === '') {
      msgToast({
        title: 'Error',
        description: 'Enter Valid Email',
        status: 'error',
        isClosable: true,
      });
    } else {
      msgToast({
        title: 'Message Sent',
        status: 'success',
        isClosable: true,
      });
    }
    setEmail('');
  };

  return (
    <Box
      p={{ base: 5, md: 10 }}
      bg="#333697"
      color={'white'}
      borderRadius={10}
      width={{ base: '90%', md: '80%', lg: '70%' }}
      margin={'auto'}
    >
      <SimpleGrid
        columns={{ base: 1, md: columns }}
        alignItems="center"
        gap={5}
      >
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
            type="email"
            value={email}
            placeholder="Email here"
            variant={'unstyled'}
            border={'none'}
            outline={'none'}
            color={'#7C7C7C'}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            bg="#FFEC05"
            borderRadius={20}
            width={'30%'}
            onClick={handleSend}
          >
            Send
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default ContactUs;
