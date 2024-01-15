import {
  chakra,
  Box,
  Button,
  Stack,
  Image,
  Text,
  Flex,
  Center,
  Icon,
  Show,
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

  // const { colorMode } = useColorMode()

  return (
    <Box py={{base: 0, md: 0}} mx="auto" maxHeight={{base: '10vh', md:'10vh'}} >


      <Show above='sm'>
        <Center
          // w={{ base: "full"}}
          // mx="auto"
          // my="auto"
          // position='fixed'
          // mt={{base: '25vh', md: -10}}
          textAlign="center"
        >
          <Image
                      // shadow="2xl"
                      src={getCloudinaryImage('yujo5.svg')} 
                      alt="Yujo Brand Logo"
                      width={{base:200, md:1980/1.5}}
                      height= {{base:150,md:1080/1.5}}
                      placeholder="blur"
                      blurDataURL={getCloudinaryImageBlur('yujo5.svg')}
          /> 


          {/* <Blur
          position={'fixed'}
          top={{base:'10vh', md:'10vh', lg:'15vh'}}
          left={{base:'20vw', md:'40vw', lg:'40vw'}}
          style={{ filter: 'blur(85px)' }}
        /> */}

        </Center>
      </Show>


      <Show below='sm'>
        <Flex alignContent={"center"} justifyContent={"center"} marginY="auto">
        <Center
          // w={{ base: "full"}}
          // mx="auto"
          // my="auto"
          // position='fixed'
          // mt={{base: '25vh', md: -10}}
          // textAlign="center"
          // maxHeight={'80vh'}
        >
          <Box pt={'15vh'}>
          <Image
                      // shadow="2xl"
                      src={getCloudinaryImage('yujo9.svg')} 
                      alt="Yujo Brand Logo Mobile"
                      width={300}
                      height= {300}
                      placeholder="blur"
                      blurDataURL={getCloudinaryImageBlur('yujo9.svg')}
          /> 
          </Box>



          {/* <Blur
          position={'fixed'}
          top={{base:'10vh', md:'10vh', lg:'15vh'}}
          left={{base:'20vw', md:'40vw', lg:'40vw'}}
          style={{ filter: 'blur(85px)' }}
        /> */}

        </Center>
        </Flex>
      </Show>


    </Box>
  );
};

