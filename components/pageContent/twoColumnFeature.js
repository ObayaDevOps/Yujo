import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    ScaleFade,
    Show,
  } from '@chakra-ui/react';
  import React, { useRef } from "react";
  import { useInView } from "framer-motion";
  import Image from 'next/image';
  import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';
  

  
  
  const Feature = ({ text, icon, iconBg }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
        <Stack direction={'row'} align={'center'}>
          <Flex
            w={8}
            h={8}
            align={'center'}
            justify={'center'}
            rounded={'full'}
            bg={iconBg}
            ref={ref}>
            {icon}
          </Flex>
          <Text fontWeight={600}>{text}</Text>
        </Stack>
      </ScaleFade>
    );
  };
  
  export default function TwoColumnFeature() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
        <Container  maxW={'6xl'}  minHeight={"75vh"} centerContent >
        
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={{base:7, md: 0}}>
            <Stack spacing={4}       ref={ref}>
              <Text
                textTransform={'uppercase'}
                color={'green.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('green.50', 'green.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Who We Are
              </Text>
              <Heading
              fontSize={'5xl'}
              bgClip="text"
              bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              pb={{base:7}}
              >
                  A Modern Eye-Care Specialist</Heading>

              <Text color={'gray.500'} fontSize={'lg'}>
                For the past 20 years, Med Optics Vision Centre has paved a path of firsts in Uganda’s vision care Industry, challenging the boundaries to create opportunities in eye health care and deliver the best outcomes for patients.
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
                Our focus at Med Optics is to develop and lead the Ugandan ophthalmic and Optometry industry with novel solutions that advance the existing standard of eye care, and enrich the lives and treatment alternatives for patients across the country, and beyond.
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
                Our inspiration is to help our clients see better, connect better, and live to the fullest. Our vision also extends to our collaborations, education and community efforts to bring new solutions to those in need.
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
                With a culture of quality: at the service of customers, employees, and the community, we are unwavering in our pursuit to transform eye care standards and improve patient lives throughout Uganda.
              </Text>

            </Stack>
            <Flex pb={{base:10}}>
              <Show below='sm'>
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1349}
                    height={1450} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  />
              </Show>
              <Show above='md'>
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1349}
                    height={1700} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  />
              </Show>
            </Flex>
          </SimpleGrid>
        </Container>
      </ScaleFade>

    );
  }