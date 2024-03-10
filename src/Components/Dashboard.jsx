import { Box, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/account-page" />;
  }

  return (
    <Box p={20}>
      <Box width={'80%'} margin={'auto'} mt={20}>
        <Heading>Welcome to Learning Exp.</Heading>
      </Box>
    </Box>
  );
}

export default Dashboard;
