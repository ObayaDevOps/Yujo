'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Show,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
    {
      id: 0,
      title: 'Next.Js - Faster than BBC.com',
      text: 'Next.Js is High Performance, Modern Software Development Library. You get a site made with the same tech used by some of the world\'s largest companies including: TikTok, Nike, Washington Post, Ticketmaster and DoorDash',
    },
    {
      id: 1,
      title: 'Professional Aftercare',
      text: 'Worried about something going wrong? We provide 3 months of included support to make sure any handover is as smooth as possible',
    },
    {
        id: 2,
        title: 'Update your Website yourself with No Developer Skills',
        text: ' Just log in, make changes in the Cloud and publish to see them ! Make Fresh Content your Competitive Advantage. We use Sanity CMS, a cloud solution used by firms such as Nike.',
      },

      {
        id: 3,
        title: 'Mobile Friendly Design - Optimised for Ugandan Internet',
        text: '80% of visitors are likely to visit your site on their mobile phone so we design with this in mind.  50% will leave if it doesn\'t load within 5 seconds. Our Websites are light and fast, with cloud-hosted content for instant page loads ',
      },

      {
        id: 4,
        title: 'Market Leading SEO',
        text: 'SEO, or search engine optimization, is the process of improving the visibility of your website in search engine results pages (e.g Google). When your website ranks higher for relevant search terms, you\'ll get more organic traffic, which means more potential customers.',
      },      {
        id: 5,
        title: 'Visitor Analytics',
        text: 'Make your business choices based on real customer data, data can be used to understand who your visitors are,  see which websites they\'re coming from, and what they\'re doing on your website. This information can be used to create content and marketing campaigns that are more relevant to your target audience.',
      }

];

export default function GridListWithHeading() {
  const { colorMode } = useColorMode()

  return (
    <Box
    w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
    mx="auto"
    pb={25}
  >
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      {colorMode === 'light' && (
          <Heading fontSize={{base:'6xl',md:'8xl'}} bgClip="text"
              bgGradient="linear(to-r, black, whiteAlpha.100)"
              // textColor="white"
              fontWeight="extrabold">
                Website Features
          </Heading>
      )}
      {colorMode === 'dark' && (
          <Heading fontSize={{base:'6xl',md:'8xl'}} bgClip="text"
          bgGradient="linear(to-r, white, whiteAlpha.500)"
          fontWeight="extrabold"
          >
            Website Features
          </Heading>
      )}

        <Text color={useColorModeValue('gray.600', 'gray.200')}  fontWeight={200} fontSize={'xl'}>
        A modern brand is defined by its digital presence, starting with the website.
        We focus on creating websites that effectively convey the brand's identity and perspective, then optimize for an enhanced user experience.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {features.map((feature) => (
            <Box
            maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
            // padding={7}
            py={8}
            paddingRight={8}
            paddingLeft={2}
            bgColor="gray.100"
            // opacity={0.15}
            background="rgba(192,192,192,0.15)"
            border='30px'
            shadow={'xl'}
            >

            <HStack key={feature.id} align={'top'} >
              <Box color={'green.400'} px={2} >
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text color={useColorModeValue('black', 'gray.100')} fontWeight={800} fontSize={'xl'}>{feature.title}</Text>
                <Text color={useColorModeValue('black', 'gray.100')}
                fontSize={'lg'}>{feature.text}</Text>
              </VStack>
            </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    </Box>

  )
}