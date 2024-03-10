import React, { useState, useContext, useEffect } from 'react';
import { Flex, Box, Button, Grid } from '@chakra-ui/react';
import Login from './Login';
import SignUp from './SignUp';
// import { AuthContext } from '../Context/AuthContext';
import { AuthContext } from '../Contexts/AuthContext';

import { Navigate } from 'react-router-dom';

function Account() {
  const contextDetails = useContext(AuthContext);

  const [flag, setFlag] = useState(true);

  const LOGIN_BASE_URL = 'https://reqres.in/api/login';
  const REGISTER_BASE_URL = 'https://reqres.in/api/register';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  if (contextDetails.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Grid
        justifyContent="center"
        alignItems="center"
        width={'100vw'}
        height="max-content"
        p={{ base: 5, md: 10, lg: 10 }}
        mt={20}
      >
        <Box
          width={{ base: '250px', sm: '400px', md: '500px' }}
          minHeight={{ md: '500px' }}
          height="max-content"
          borderRadius={20}
          boxShadow="lg"
        >
          <Flex>
            <Button
              width="50%"
              borderRadius={0}
              borderTopLeftRadius={20}
              height="60px"
              onClick={() => setFlag(true)}
              bg={flag ? '#242424' : '#edf2f7'}
              color={flag ? '#fff' : '#111'}
              variant={flag ? 'unstyled' : 'solid'}
            >
              Login
            </Button>
            <Button
              width="50%"
              height="60px"
              borderRadius={0}
              borderTopRightRadius={20}
              onClick={() => setFlag(false)}
              bg={!flag ? '#242424' : '#edf2f7'}
              color={!flag ? '#fff' : '#111'}
              variant={!flag ? 'unstyled' : 'solid'}
            >
              SignUp
            </Button>
          </Flex>
          {flag ? (
            <Login {...contextDetails} BASE_URL={LOGIN_BASE_URL} />
          ) : (
            <SignUp {...contextDetails} BASE_URL={REGISTER_BASE_URL} />
          )}
        </Box>
      </Grid>
    </>
  );
}

export default Account;
