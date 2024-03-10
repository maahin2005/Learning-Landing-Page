import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function SecondSection() {
  const CreateCard = ({ title, desc, sepH, boxS, imgSrc }) => {
    return (
      <Box
        p={{ base: 2, md: 10 }}
        textAlign={'center'}
        height={{ base: 'max-content', lg: { sepH } }}
        boxShadow={boxS}
        width={'fit-content'}
        cursor={'pointer'}
        _hover={{
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image src={imgSrc} alt={'title'} margin={'auto'} />
        <Heading size={{ base: 'sm', md: 'lg', lg: 'xl' }}>{title}</Heading>
        <Text
          noOfLines={3}
          textAlign={'left'}
          color={'#6B6969'}
          fontWeight={600}
          my={5}
        >
          {desc}
        </Text>
      </Box>
    );
  };

  return (
    <section style={{ background: '#F9F9FF', marginTop: '100px' }}>
      <Box
        width={{ base: '90%', md: '80%' }}
        margin="auto"
        textAlign={'center'}
        mt={10}
      >
        <Heading
          width={'max-content'}
          my={5}
          margin="auto"
          size={{ base: 'sm', md: 'lg', lg: 'xl' }}
        >
          We provide various kind of <br />
          learning modules for you
        </Heading>
        <Text noOfLines={2} color={'#707070'} fontWeight={600} mt={5}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable
          <br /> Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          gap={8}
          width={{ base: '100%', md: '98%' }}
          margin={'auto'}
          my={{ base: 10, md: 20 }}
        >
          <CreateCard
            title="Learn Anything"
            desc="It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy. Various Versions Have Evolved Over The Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour And The Like)."
            imgSrc="/Images/smartphone (1).svg"
            sepH="450px"
            boxS={'md'}
          />

          <Box
            p={{ base: 3, md: 10 }}
            textAlign={'center'}
            width={'fit-content'}
            boxShadow={'md'}
            height={{ base: 'max-content', lg: '500px' }}
            position={'relative'}
            bottom={{ md: 25 }}
            bg={'#ffea0536'}
            cursor={'pointer'}
            _hover={{
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <Image
              src={'/Images/Dashboard.svg'}
              alt={'title'}
              margin={'auto'}
            />
            <Heading size={{ base: 'sm', md: 'lg', lg: 'xl' }}>
              Flexible Learning
            </Heading>
            <Text
              noOfLines={3}
              textAlign={'left'}
              color={'#6B6969'}
              fontWeight={600}
              my={5}
            >
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout. The
              Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal
              Distribution Of Letters, As Opposed To Using 'Content Here,
              Content Here', Making It Look Like Readable English. Many Desktop
              Publishing Packages And Web Page Editors Now Use Lorem Ipsum As
              Their Default Model Text, And A Search For 'Lorem Ipsum' Will
              Uncover Many Web Sites Still In Their Infancy. Various Versions
              Have Evolved Over The Years, Sometimes By Accident, Sometimes On
              Purpose (Injected Humour And The Like).
            </Text>
          </Box>

          <CreateCard
            title="Expert Connect"
            desc="It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy. Various Versions Have Evolved Over The Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour And The Like)."
            imgSrc="/Images/layout.svg"
            sepH="450px"
            boxS={'md'}
          />
        </SimpleGrid>
      </Box>
    </section>
  );
}

export default SecondSection;
