import React, { useState, useReducer } from 'react';
import { Input, Text, Box, Flex, RadioGroup, Radio } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'firstName': {
      return {
        ...state,
        firstName: payload,
      };
    }
    case 'lastName': {
      return {
        ...state,
        lastName: payload,
      };
    }
    case 'email': {
      return {
        ...state,
        email: payload,
      };
    }
    case 'phoneNumber': {
      return {
        ...state,
        phoneNumber: payload,
      };
    }
    case 'password': {
      return {
        ...state,
        password: payload,
      };
    }
    case 'reset':
      return initialState;
    default: {
      throw new Error('Invalid Credential');
    }
  }
}

function SignUp({ toggleIsAuthenticated, BASE_URL }) {
  const [signupMethod, setSignupMethod] = useState('email');
  const [formData, dispatch] = useReducer(reducer, initialState);

  async function postUserRegisterCredentials() {
    try {
      const fetchTheData = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const finalData = await fetchTheData.json();

      console.log(finalData);

      if (finalData?.message) {
        toggleIsAuthenticated();
      }
    } catch (error) {
      console.log('Password Wrong');
      throw new Error(error.message);
    }
  }

  const handleMethodChange = value => {
    setSignupMethod(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'reset',
    });
    postUserRegisterCredentials();
  };

  const { firstName, lastName, email, phoneNumber, password } = formData;

  return (
    <>
      <Box textAlign={'center'} p={{ base: 2, md: 5 }}>
        <Text
          fontSize={20}
          fontWeight="bold"
          letterSpacing={1}
          color="#111"
          mb={3}
        >
          Do SignUp & Connect With Us!
        </Text>
        <form action="" onSubmit={handleSubmit}>
          <FormControl
            display={'grid'}
            width={{ base: '200px', sm: '300px', md: '400px' }}
            margin={'auto'}
          >
            <Box gap={2} display={{ md: 'flex' }}>
              <Input
                type="text"
                bgColor={'#edf2f7'}
                p={3}
                placeholder="First Name"
                margin={{ base: '3px auto', md: '10px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                borderRadius={40}
                fontWeight={600}
                name="firstName"
                value={firstName}
                onChange={e => {
                  dispatch({ type: e.target.name, payload: e.target.value });
                }}
                required
              />

              <Input
                type="text"
                bgColor={'#edf2f7'}
                p={3}
                placeholder="Last Name"
                margin={{ base: '3px auto', md: '10px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                borderRadius={40}
                fontWeight={600}
                name="lastName"
                value={lastName}
                onChange={e => {
                  dispatch({ type: e.target.name, payload: e.target.value });
                }}
                required
              />
            </Box>

            <RadioGroup
              defaultValue="email"
              onChange={handleMethodChange}
              mt={3}
            >
              <Flex
                align="center"
                justifyContent={'center'}
                display={{ base: 'none', md: 'flex' }}
              >
                Continue with
                <Radio value="email">
                  <Text
                    color={'blue.300'}
                    fontWeight={600}
                    textDecoration={
                      signupMethod === 'email' ? 'underline' : 'none'
                    }
                  >
                    Email
                  </Text>
                </Radio>
                <Text mx={2}>OR</Text>
                <Radio value="phone">
                  <Text
                    color={'blue.300'}
                    fontWeight={600}
                    textDecoration={
                      signupMethod === 'phone' ? 'underline' : 'none'
                    }
                  >
                    Phone Number
                  </Text>
                </Radio>
              </Flex>
            </RadioGroup>
            {signupMethod === 'email' && (
              <Input
                type="email"
                bgColor={'#edf2f7'}
                p={3}
                placeholder="Enter Email"
                margin={{ base: '3px auto', md: '10px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                borderRadius={40}
                fontWeight={600}
                name="email"
                value={email}
                onChange={e => {
                  dispatch({ type: e.target.name, payload: e.target.value });
                }}
                required
              />
            )}
            {signupMethod === 'phone' && (
              <Input
                type="number"
                bgColor={'#edf2f7'}
                p={3}
                placeholder="Enter Phone Number"
                margin={{ base: '3px auto', md: '10px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                borderRadius={40}
                fontWeight={600}
                name="phoneNumber"
                value={phoneNumber}
                onChange={e => {
                  dispatch({ type: e.target.name, payload: e.target.value });
                }}
                required
              />
            )}

            <Input
              type="password"
              bgColor={'#edf2f7'}
              p={3}
              placeholder="Set Password"
              margin={{ base: '3px auto', md: '10px auto' }}
              width={{ base: '200px', sm: '300px', md: '100%' }}
              height={'50px'}
              borderRadius={40}
              fontWeight={600}
              name="password"
              value={password}
              onChange={e => {
                dispatch({ type: e.target.name, payload: e.target.value });
              }}
              required
            />

            <Input
              type="Submit"
              fontSize={25}
              letterSpacing={2}
              bgColor={'#242424'}
              value="SignUp"
              margin={{ base: '5px auto', md: '20px auto' }}
              width={{ base: '200px', sm: '100%' }}
              height={'50px'}
              color={'white'}
              cursor={'pointer'}
              borderRadius={40}
              fontWeight={600}
              _hover={{
                bgColor: '#edf2f7',
                color: '#111',
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              }}
              style={{
                transition: 'transform 0.3s ease',
              }}
              readOnly
            />
          </FormControl>
        </form>
        <Text color={'#3b3bfc'} mt={10}>
          Already SignUpped? Do Login via click on Login Button!
        </Text>
      </Box>
    </>
  );
}

export default SignUp;
