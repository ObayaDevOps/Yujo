import React from "react";
import { chakra, Box, useColorModeValue, Stack, Button, Icon, Image, Heading, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

import NextImage from 'next/image';
import { urlForImage } from '../../lib/sanity.image'

//get ServerSideProps - to load the sanity images 

export default function HeroWithSideImage(){

  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={0} p={{base:5, md: 0}} >
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "5xl" }}
          minH={{lg: "85vh"}}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
          minHeight={'90vh'}
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            // maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >

                <Heading
                    as={'h1'}
                        mb={6}
                        fontSize={{
                        base: "5xl",
                        md: "8xl",
                        }}
                        // minHeight={'1vh'}
                        fontWeight="bold"
                        lineHeight="none"
                        letterSpacing={{
                        base: "normal",
                        md: "tight",
                        }}
                        color="green.900"
                        _dark={{
                        color: "green.100",
                        }}
                    >
                        All your {" "}
                        <Text
                        display={{
                            base: "block",
                            // lg: "inline",
                        }}
                        w="full"
                        bgClip="text"
                        bgGradient='linear(to-r, green.600, green.300)'
                        fontWeight="extrabold"
                        transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(140%)", }}
                        >
                        Optical Needs
                        </Text>{" "}
                        in one single place.
                </Heading>

              {/* <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Good vision is essential for our everyday wellbeing and quality of life. The sense of Sight is how we experience the world. It is how we learn, how we remember, and what many fear losing the most. Being able to see clearly allows us to learn, work,
                and interact with the world around us. That’s why Med Optics teams across the country are driven by a vital mission of improving lives by improving sight. To protect, correct, enhance, and treat.
              </chakra.p> */}
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
Med-Optics  is a private company that was established in 2002 to provide a high standard of quality eye care services.  We have modern equipment and experienced staff to take care of all patients’ needs.              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >

            <Stack
                direction={{
                base: "column",
                sm: "row",
                }}
                mb={{
                base: 4,
                md: 8,
                }}
                spacing={2}
                justifyContent={{
                sm: "left",
                md: "center",
                }}
                paddingTop={5}
            >
              <NextLink href="/info/service-centres">
                <Button
                as="a"
                variant="solid"
                colorScheme="green"
                bgGradient='linear(to-r, green.500, green.300)'

                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontFamily="Helvetica"
                w={{
                    base: "full",
                    sm: "auto",
                }}
                mb={{
                    base: 2,
                    sm: 0,
                }}
                size="lg"
                cursor="pointer"
                >
                Find a Centre
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </Icon>
                </Button>
              </NextLink>

                <NextLink href="/appointments/eyeTest">
                  <Button
                  as="a"
                  colorScheme="green"
                  bgGradient='linear(to-r, green.500, green.300)'
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w={{
                      base: "full",
                      sm: "auto",
                  }}
                  mb={{
                      base: 2,
                      sm: 0,
                  }}
                  size="lg"
                  cursor="pointer"
                  fontFamily="Helvetica"

                  >
                  Book an Appointment
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                      <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                      />
                  </Icon>
                  </Button>
                </NextLink>
            </Stack>
    



              </Box> 
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border="solid 1px transparent"
      >
        {/* <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          loading="eager"
        /> */}

    <Image
        w="full"
        layout='fill'
        h={[56, 72, 96, "full"]}
        alt={`Cover Image`}
        fit="cover"
        src={urlForImage('image-3afb360863fdc0e6fa6fcb015b4bba922f325d8f-2850x1900-jpg').height(1000).width(2000).url()}
        // sizes="100vw"
        priority={true}
      />

      {/* <NextImage
        w="full"
        layout='fill'
        h={[56, 72, 96, "full"]}
        alt={`Cover Image`}
        fit="cover"
        src={urlForImage('image-3afb360863fdc0e6fa6fcb015b4bba922f325d8f-2850x1900-jpg').height(1000).width(2000).url()}
        // sizes="100vw"
        priority={true}
      /> */}

        
      </Box>
    </Box>
  );
};

