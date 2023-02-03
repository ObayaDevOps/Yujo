import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue,
    chakra,


  } from '@chakra-ui/react';

  
  export default function FullWidthBannerWithBackgroundImage({props}) {
    return (
      <Flex
        w={'full'}
        h={useBreakpointValue({ base: '800px', md: '80vh' })}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          // paddingBottom={{md: 15}}
          p={{base:12}}
          >
          <Stack maxW={'2xl'} align={'flex-start'} >
          <VStack alignItems="flex-start" spacing="20px">
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Value
            </Text>
              <chakra.h2 
              fontSize={{base: '5xl', md:"6xl"}} 
              fontWeight="700"
              bgClip="text"
              // bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              color={'white'}
              letterSpacing={{
                base: "normal",
                md: "tight",
                }}
                pb={{base:5}}
              >
                Our State-Of-The-Art Eye Care Equipment
              </chakra.h2>
            </VStack>

            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'lg', md: '2xl' })}>
                At Med Optics Vision Centre, we are proud to offer our patients the latest in state-of-the-art eye care equipment. Our cutting-edge technology allows us to provide accurate and precise diagnoses, as well as effective treatments for a wide range of eye conditions.
                Our state-of-the-art equipment, combined with the expertise of our highly trained eye care professionals, allows us to provide the highest level of care to our patients.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }