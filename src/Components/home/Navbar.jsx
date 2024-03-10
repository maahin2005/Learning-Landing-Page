import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef(null);

  const homeNavigation = useNavigate('');

  const location = useLocation();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    homeNavigation('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        navRef.current.style.backdropFilter = 'blur(18px)';
        navRef.current.style.backgroundColor = '#677294';
      } else {
        navRef.current.style.backdropFilter = 'blur(0px)';
        navRef.current.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePages = path => {
    homeNavigation(path);
  };

  const CreateButtons = ({ text, value }) => {
    return (
      <Button
        display={{ base: 'none', md: 'inline-block' }}
        zIndex={10}
        variant={'unstyled'}
        value={value}
        color={
          (text === 'Home' && location.pathname === '/') ||
          (text === 'Services Us' && location.pathname === '/services') ||
          (text === 'Why Us' && location.pathname === '/why') ||
          (text === 'Our Goals' && location.pathname === '/goals')
            ? 'white'
            : '#BCBCBC'
        }
        // color={
        // (text === 'Home' && location.pathname === '/') ||
        // (text === 'Services Us' && location.pathname === '/services') ||
        // (text === 'Why Us' && location.pathname === '/why') ||
        // (text === 'Our Goals' && location.pathname === '/goals')
        //     ? '#111'
        //     : '#BCBCBC'
        // }
        letterSpacing="0.25px"
        borderBottom={
          (text === 'Home' && location.pathname === '/') ||
          (text === 'Services Us' && location.pathname === '/services') ||
          (text === 'Why Us' && location.pathname === '/why') ||
          (text === 'Our Goals' && location.pathname === '/goals')
            ? '3px solid #FFEC05'
            : 'none'
        }
        borderRadius={0}
        _hover={{
          color: 'white',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-out',
        }}
        // _hover={
        //   text === 'Home'
        //     ? {
        //         transform: location.pathname !== '/' ? 'scale(1.05)' : 'null',
        //         color: location.pathname !== '/' ? 'black' : 'white',
        //       }
        //     : {
        //         color:
        //           color === 'black' && location.pathname === '/'
        //             ? '#111'
        //             : '#fff',
        // transform: 'scale(1.05)',
        // transition: 'transform 0.3s ease-out',
        //       }
        // }
        onClick={() => handlePages(value)}
      >
        {text}
      </Button>
    );
  };

  return (
    <Box
      p={{ base: 1, sm: 3 }}
      position={'fixed'}
      top={0}
      width={'100%'}
      bg={location.pathname !== '/' ? '#677294' : 'transparent'}
      zIndex={10}
      ref={navRef}
    >
      <Flex
        width={{ base: '90%', md: '90%', lg: '80%' }}
        height={'50px'}
        margin="auto"
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Flex
          zIndex={10}
          gap={2}
          cursor={'pointer'}
          onClick={handleClick}
          alignItems={'center'}
        >
          <Image
            width={{ base: '20%', sm: '20%', md: '20%', lg: '20%' }}
            src="/Images/logo.svg"
            alt="svg-logo-nav"
            zIndex={10}
          />
          <Heading
            zIndex={10}
            color={location.pathname !== '/' ? 'black' : 'white'}
            fontWeight={600}
            size={{ base: 'md', md: 'md', lg: 'xl' }}
          >
            Learning Exp.
          </Heading>
        </Flex>

        <Flex gap={{ base: 0, md: 5 }}>
          <CreateButtons text="Home" value="/" />

          <CreateButtons text="Services Us" value="services" />
          <CreateButtons text="Why Us" value="why" />
          <CreateButtons text="Our Goals" value="goals" />

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
