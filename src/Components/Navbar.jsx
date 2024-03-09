import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export default function Navbar() {
  const CreateButtons = ({ text }) => {
    return (
      <Button
        display={{ base: 'none', md: 'inline-block' }}
        zIndex={20}
        variant={'unstyled'}
        color={text === 'Home' ? '#fff' : '#BCBCBC'}
        letterSpacing="0.25px"
        borderBottom={text === 'Home' ? '3px solid #FFEC05' : 'none'}
        borderRadius={0}
        _hover={
          text === 'Home'
            ? 'none'
            : {
                color: '#FFFFFF',
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-out',
              }
        }
      >
        {text}
      </Button>
    );
  };

  return (
    <Box p={{ base: 1, sm: 3 }}>
      <Flex
        width={{ base: '90%', md: '90%', lg: '80%' }}
        height={'72px'}
        margin="auto"
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Image
          width={{ base: '150px', sm: '40%', md: '20%' }}
          src="/svgs/Logo-nav.svg"
          alt="svg-logo-nav"
          zIndex={10}
        />

        <Flex gap={{ base: 0, md: 5 }}>
          <CreateButtons text="Home" />
          <CreateButtons text="Services Us" />
          <CreateButtons text="Why Us" />
          <CreateButtons text="Our Goals" />

          <Button
            display={{ base: 'none', md: 'inline-block' }}
            bg={'#FFEC05'}
            px={{ base: 2, sm: 5 }}
            borderRadius={20}
            zIndex={20}
            fontSize={{ base: '10px' }}
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
