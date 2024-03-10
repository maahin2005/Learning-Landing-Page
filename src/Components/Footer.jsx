import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  const CreateIcons = ({ src }) => {
    return <Image src={src} alt="title" />;
  };

  const CreateText = ({ text }) => {
    return (
      <Text color={'#8A8A8A'} width={'fit-content'} textAlign={'left'}>
        {text}
      </Text>
    );
  };

  return (
    <>
      <footer>
        <Box height={{ base: 'max-content', md: '400px' }} bg="#ebebf89b">
          <Box width={'80%'} margin="auto" pt={20}>
            <SimpleGrid
              alignItems={'start'}
              columns={{ base: 1, sm: 2, md: 4 }}
              mt={20}
              gap={20}
              textAlign={'center'}
            >
              <Box>
                <Flex gap={2} justifyContent={'center'}>
                  <Image
                    src={'/Images/logo.svg'}
                    width={{ base: '20%', md: '20%' }}
                  />
                  <Heading size={'md'} alignSelf={'center'}>
                    Learning Exp.
                  </Heading>
                </Flex>
                <Flex mt={5} gap={2} justifyContent={'center'}>
                  <CreateIcons src="/Images/facebook.svg" />
                  <CreateIcons src="/Images/twitter.svg" />
                  <CreateIcons src="/Images/linkedIn.svg" />
                  <CreateIcons src="/Images/pintrest.svg" />
                </Flex>
              </Box>
              <Box margin="auto">
                <Text
                  fontWeight={700}
                  mb={5}
                  width={'fit-content'}
                  textAlign={'left'}
                >
                  Links
                </Text>
                <CreateText text="Home" />
                <CreateText text="Pricing" />
                <CreateText text="Download" />
                <CreateText text="About" />
                <CreateText text="Service" />
              </Box>
              <Box margin="auto">
                <Text
                  fontWeight={700}
                  mb={5}
                  width={'fit-content'}
                  textAlign={'left'}
                >
                  Support
                </Text>
                <CreateText text="FAQ" />
                <CreateText text="How it" />
                <CreateText text="Features" />
                <CreateText text="Contact" />
                <CreateText text="Reporting" />
              </Box>
              <Box margin={{ base: 'auto', sm: '0' }}>
                <Text
                  fontWeight={700}
                  mb={5}
                  width={'fit-content'}
                  textAlign={'left'}
                >
                  Contact Us
                </Text>
                <CreateText text="+880 12345678" />
                <CreateText text="youremail@gmail.com" />
                <CreateText text="Pune City" />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </footer>
    </>
  );
}
