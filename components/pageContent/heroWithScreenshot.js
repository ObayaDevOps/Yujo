import {
  chakra,
  Box,
  Button,
  Stack,
  // Image,
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
      {/* <circle cx="71" cy="61" r="111" fill="#E40084" />
      <circle cx="244" cy="106" r="139" fill="#E40084" />
      <circle cy="291" r="139" fill="#E40084" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#E40084" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#E40084" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#E40084" />

      <circle cx="244" cy="106" r="139" fill="#E40084" />
      <circle cy="291" r="139" fill="#E40084" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#FFEA00" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#FFEA00" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#FFEA00" /> */}



      {/* #EC2227 - Red */}

      <circle cx="71" cy="61" r="111" fill="#EC2227" />
      <circle cx="244" cy="106" r="139" fill="#EC2227" />
      <circle cy="291" r="139" fill="#EC2227" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#EC2227" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#EC2227" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#EC2227" />
      {/* <circle cx="426.5" cy="-0.5" r="101.5" fill="#EC2227" /> */}
      {/* <circle cx="71" cy="61" r="111" fill="#EC2227" /> */}
      <circle cx="244" cy="106" r="139" fill="#EC2227" />
      <circle cy="291" r="139" fill="#EC2227" />
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
    <Box px={8} py={{base: 0, md: 0}} mx="auto" maxHeight={'80vh'} >



      <Center
        w={{ base: "full", md: 1/3, lg: 1/4 }}
        mx="auto"
        my="auto"
        // position='fixed'
        mt={{base: 20, md:20}}
        textAlign="center"
      >
        {colorMode === 'dark' && (
        <NextImage
                    // w="full"
                    // rounded="lg"
                    // objectFit='contain'
                    // position='relative'
                    shadow="2xl"
                    src={getCloudinaryImage('yujo3.svg')} 
                    alt="Yujo Brand Logo"
                    width={1971}
                    height= {2667}

                    placeholder="blur"
                    // layout='responsive'
                    // opacity={0.5}
                    blurDataURL={getCloudinaryImageBlur('yujo3.svg')}
                    // ref={ref}

        /> 
        )}

{colorMode === 'light' && (
                <NextImage
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('yujo3-white.svg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1971}
                    height= {2667}
                    placeholder="blur"
                    // layout='fill'
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

    </Box>
  );
};

