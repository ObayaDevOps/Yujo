'use client';

import drinksMenu from '../../public/pdfs/yujo-drinks.pdf'

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

export default function DrinksMenuPage() {
    return(
        <Box width={'2xl'}>
            {/* <iframe src={drinksMenu} /> */}
            <iframe   width="800" height="600" src={'https://research.google.com/pubs/archive/44678.pdf'} />

        </Box>
    );

}