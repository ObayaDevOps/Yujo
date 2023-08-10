'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';


//put this in a carousel
export default function blogPostWithImage() {
  return (
    <Box p={4}>
      {/* <Center>
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.400,purple.500)"
            fontWeight="extrabold"
            fontSize={{ base: "5xl", md: "8xl" }}
            textAlign={{ base: "left", md: "center" }}
            p={20}
            
          >Projects</Text>
          </Center> */}
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} pt={20}>
        <Heading fontSize={'8xl'} bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold">
              Our Work</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Past Clients that we have been happy to work with
        </Text>
      </Stack>


    <Center>
      <VStack padding={{md:15}} spacing={12}>
      <Box
        maxW={{base: '30vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}>
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('Screenshot_from_2023-08-10_16-23-10_kylnck.png')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('Screenshot_from_2023-08-10_16-23-10_kylnck.png')}
            />  
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Bookings ,CMS
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Med-Optics Vision Centre
          </Heading>
          <Text color={useColorModeValue('gray.500', 'white')}>
          A 'Top 100 Mid-Sized Companies in Uganda 2022' Winner. The User wanted a high performance website that the marketing department was able to edit the content of the website in a similar fashion to wordpress but with better SEO and google pageRank Score (95+) 
          </Text>
        </Stack>
      </Box>

      <Box
        maxW={{base: '30vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}>
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('afropoceneScreenshot_qwd27h.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('afropoceneScreenshot_qwd27h.jpg')}
            />  
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Web3, CMS
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Afropocene StudioLab
          </Heading>
          <Text color={useColorModeValue('gray.500', 'white')}>
          Afropocene StudioLab is an award winning collaborative arts and technology lab, which aims to foster and export
the next generation of influential African technology (NFTs) and art. We are a proud recipient of funding from the
United Nations Development Program in 2023.
          </Text>
        </Stack>
      </Box>

      <Box
        maxW={{base: '30vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}>
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('Screenshot_from_2023-08-10_16-25-39_evsnsk.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('Screenshot_from_2023-08-10_16-25-39_evsnsk.jpg')}
            />  
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            color={useColorModeValue('blue.500', 'white')}

            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Humble Beeing Honey
          </Heading>
          <Text color={useColorModeValue('gray.500', 'white')}>
          Humble Beeing is a proudly Ugandan Social Enterprise specialising in Beekeeping. A Website Built for Beekeeping Social Enterprise - the intention was to give the new company a polished professional look, while informing about the company mission, vision and brand image. Interactive Scroll Elements. Built and Designed in house with No templates used. Styled CSS and Interactivity by SemanticUI.
        </Text>
        </Stack>
      </Box>
      </VStack>
      </Center>
      </Box>
  )
}