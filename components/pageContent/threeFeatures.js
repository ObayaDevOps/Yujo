import { chakra, Box, SimpleGrid, Flex,Center, Icon, ScaleFade, } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Feature = (props) => {
  return (
    <Box minHeight='1vh'>
      <Center>
      <Icon
        boxSize={12}
        _light={{ color: "green.700" }}
        mb={4}
        fill="none"
        viewBox="0 0 21 24"
        stroke="currentColor"
        aria-hidden="true"
        alignItems="center"

      >
        {props.icon}
      </Icon>
      </Center>
      <Center>
      <chakra.h3
        mb={3}
        fontSize="lg"
        lineHeight="shorter"
        fontWeight="bold"
        _light={{ color: "green.700" }}
      >
        {props.title}
      </chakra.h3>
      </Center>
      
      <chakra.p
        lineHeight="tall"
        color="gray.600"
        _dark={{ color: "gray.50" }}
        textAlign="center"
      >
        {props.children}
      </chakra.p>
 

      
    </Box>
  );
};


export default function ThreeFeature(){
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <ScaleFade initialScale={0.6}
    in={isInView}>
    <Flex
      // bg="green.500"
      // _dark={{ bg: "green.500" }}
      p={{ base: 6, lg: 10 }}
      // w="auto"
      // maxW={'6xl'}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        maxW={'6xl'}
        px={{ base: 4, lg: 4, xl: 0 }}
        py={20}
        mx="auto"
        // bg="white"
        // bgGradient='linear(to-r, gray.50, green.300)'
        // _dark={{ bgGradient: 'linear(to-r, green.500, green.800)' }}
        shadow="sm"
      >
        <Feature
          title="Need Immediate Eye Care?"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          }
        >
          Our experts, including top-ranked ophthalmologists, 
          optometrists, and opticians, are available at our nine 
          convenient locations across Uganda.
        </Feature>

        <Feature
          title="Make an Appointment"
          icon={
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
              clipRule="evenodd"
            />
          }
        >
        We have in-person and virtual visits available. 
        Call us at +256 414 340 099.

        </Feature>

        <Feature
          title="Plan your Visit"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          }
        >
          Don't let vision problems hold you back
           - visit us for expert eye care and optical treatment.
        </Feature>
      </SimpleGrid>
    </Flex>
    </ScaleFade>
  );
};
