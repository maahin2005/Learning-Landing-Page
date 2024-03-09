import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function ForthSection() {
  const CreateCarts = ({ imgSrc, number, desc, color }) => {
    return (
      <Flex gap={3} alignItems={'center'} textAlign={'left'}>
        <Image src={imgSrc} />
        <Box>
          <Text color={'#1453FF'}>{number}+</Text>
          <Text color={color} fontWeight={600}>
            {desc}
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box my={20} p={{ base: 2, md: 10 }}>
      <Box
        width={{ base: '100%', md: '80%' }}
        margin="auto"
        textAlign={'center'}
      >
        <Heading mt={10} size={{ base: 'sm', md: 'lg', lg: 'xl' }}>
          We Completed 1200+ Certification Program Successfully & Counting
        </Heading>
        <Text
          my={5}
          color="#241B1B"
          fontWeight={600}
          fontSize={{ base: '.6rem', md: '1rem' }}
        >
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning <br /> Experience That Empowers You To Achieve Your Goals.
          Join Us Today And
          <br /> Embark On A Journey Of Discovery, Growth, And Success.
        </Text>
        <SimpleGrid
          mt={10}
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={10}
          alignItems={'center'}
        >
          <CreateCarts
            imgSrc="/Images/true.svg"
            number={100}
            desc="Batch Complete"
            color={'#1453FF'}
          />
          <CreateCarts
            imgSrc="/Images/people.svg"
            number={100}
            desc="Active Batches"
            color={'#242424'}
          />
          <CreateCarts
            imgSrc="/Images/true.svg"
            number={100}
            desc="Student Satisfied"
            color={'#242424'}
          />
          <CreateCarts
            imgSrc="/Images/people.svg"
            number={100}
            desc="Course Modules"
            color={'#242424'}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default ForthSection;
