import {
  chakra,
  Box,
  Button,
  Stack,
  Image,
  Text,
  Center,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
  colorMode,
  ScaleFade
} from "@chakra-ui/react";
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import NextLink from 'next/link'
import NextImage from 'next/image'

import { GiChopsticks } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";




export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      alignContent={'center'}
      height="560px"
      viewBox="-30 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#E40084" />
      <circle cx="244" cy="106" r="139" fill="#E40084" />
      <circle cy="291" r="139" fill="#E40084" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#E40084" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#E40084" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#E40084" />

      <circle cx="244" cy="106" r="139" fill="#E40084" />
      <circle cy="291" r="139" fill="#E40084" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#FFEA00" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#FFEA00" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#FFEA00" />



      {/* #EC2227 - Red */}

      {/* <circle cx="71" cy="61" r="111" fill="#EC2227" />
      <circle cx="244" cy="106" r="139" fill="#EC2227" />
      <circle cy="291" r="139" fill="#EC2227" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#EC2227" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#EC2227" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#EC2227" />
      <circle cx="244" cy="106" r="139" fill="#EC2227" />
      <circle cy="291" r="139" fill="#EC2227" /> */}



      {/* <circle cx="80.5" cy="189.5" r="101.5" fill="#FFEA00" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#FFEA00" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#FFEA00" /> */}
      {/* <circle cx="426.5" cy="-0.5" r="101.5" fill="#FFEA00" /> */}



    </Icon>
  );
};




export default function App(){

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  const { colorMode } = useColorMode()

  return (
    <Box px={8} py={{base: 0, md: 0}} mx="auto" maxHeight={'80vh'}>



      <Center
        w={{ base: "full", md: 1/3, lg: 1/4 }}
        mx="auto"
        mt={{base: 0, md:20}}
        textAlign="center"
      >
        {colorMode === 'dark' && (
        <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('yujo3.svg')} 
                    alt="Hellonext feedback boards software screenshot"
                    // width={3675/2.5}
                    // height= {2001/2.5}
                    placeholder="blur"
                    layout='fill'
                    // opacity={0.5}
                    blurDataURL={getCloudinaryImageBlur('yujo3.svg')}
                    // ref={ref}

        /> 
        )}

{colorMode === 'light' && (
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('yujo3-white.svg')} 
                    alt="Hellonext feedback boards software screenshot"
                    // width={3675/2.5}
                    // height= {2001/2.5}
                    placeholder="blur"
                    layout='fill'
                    // opacity={0.5}
                    blurDataURL={getCloudinaryImageBlur('yujo3-white.svg')}
                    // ref={ref}

        /> 
        )}

        <Blur
        position={'fixed'}
        top={{base:'10vh', md:'10vh', lg:'15vh'}}
        left={{base:'20vw', md:'40vw', lg:'40vw'}}
        style={{ filter: 'blur(85px)' }}
      />

      </Center>


      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pt={{base: 6}}
        textAlign={{ base: "center", md: "center" }}
      >

      <ScaleFade  
        initialScale={0.6}
        in={isInView1}
      >

        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 0 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
          pt={{base:10}}
          ref={ref1}
        >
          <NextLink href="/" passHref>
          <Button
            as="a"
            // bg="red"
            colorScheme='red'
            textColor={'red'}
            variant='outline'
            
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            // cursor="pointer"
            shadow={'xl'}
            fontFamily={'Space Mono'}
          >
            Food Menu
            <Icon boxSize={7} ml={6} viewBox="0 0 20 20" fill="currentColor">
              {/* <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              /> */}
              <GiChopsticks />


            </Icon>
          </Button>
          </NextLink>
          <NextLink href="/" passHref>
          <Button
            as="a"
            colorScheme='red'
            textColor={'red'}
            variant='outline'
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            // cursor="pointer"
            shadow={'lg'}
            fontFamily={'Space Mono'}
            
          >
            Drinks Menu
            <Icon boxSize={7} ml={6} viewBox="0 0 20 20" fill="currentColor">

            <FaCocktail />

              {/* <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              /> */}
            </Icon>
          </Button>
          </NextLink>

        </Stack>

      </ScaleFade>
      </Box>


    </Box>
  );
};

