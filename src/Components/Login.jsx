import React, { useState, useReducer } from 'react';
import { Input, Text, Box, Flex, RadioGroup, Radio } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';

const initialState = {
  email: '',
  password: '',
  phoneNo: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'phoneNo':
      return { ...state, phoneNo: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid Credential');
  }
}

function Login({ toggleIsAuthenticated, BASE_URL }) {
  const [signupMethod, setSignupMethod] = useState('email');
  const [formData, dispatch] = useReducer(reducer, initialState);

  const { email, password, phoneNo } = formData;

  const handleMethodChange = value => {
    setSignupMethod(value);
  };

  async function postUserLoginCredentials() {
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
    } catch (error) {
      console.log('Password Wrong');
      throw new Error(error.message);
    }
  }

  const handleLoginSubmit = e => {
    e.preventDefault();

    dispatch({ type: 'reset' });

    postUserLoginCredentials();
    toggleIsAuthenticated();
  };

  const handleChange = e => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Box textAlign={'center'} p={5}>
        <Text
          fontSize={{ base: 10, sm: 15, md: 20 }}
          fontWeight="bold"
          letterSpacing={1}
          color="#111"
        >
          Login
        </Text>
        <form action="" onSubmit={handleLoginSubmit}>
          <FormControl
            display={'grid'}
            width={{ base: '200px', sm: '300px', md: '400px' }}
            margin={{ sm: 'auto' }}
          >
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
                placeholder="Email"
                margin={{ base: '5px auto', md: '20px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                borderRadius={40}
                fontWeight={600}
                name="email"
                value={email}
                onChange={handleChange}
              />
            )}
            {signupMethod === 'phone' && (
              <Input
                type="number"
                bgColor={'#edf2f7'}
                p={3}
                placeholder="Phone No."
                margin={{ base: '5px auto', md: '20px auto' }}
                width={{ base: '200px', sm: '300px', md: '100%' }}
                height={'50px'}
                name="phoneNo"
                value={phoneNo}
                borderRadius={40}
                fontWeight={600}
                onChange={handleChange}
              />
            )}

            <Input
              type="password"
              bgColor={'#edf2f7'}
              p={3}
              placeholder="password"
              margin={{ base: '5px auto', md: '20px auto' }}
              width={{ base: '200px', sm: '300px', md: '100%' }}
              height={'50px'}
              borderRadius={40}
              fontWeight={600}
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Input
              type="Submit"
              fontSize={25}
              letterSpacing={2}
              bgColor={'#242424'}
              value="Login"
              margin={{ base: '5px auto', md: '20px auto' }}
              width={{ base: '200px', sm: '300px', md: '100%' }}
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
          New User? Do SignUp via click on SignUp button!
        </Text>
      </Box>
    </>
  );
}

export default Login;
