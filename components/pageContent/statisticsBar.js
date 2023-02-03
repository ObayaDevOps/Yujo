import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    ScaleFade
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';

import React, { useRef } from "react";
import { useInView } from "framer-motion";
  

  function StatsCard(props) {
    const { title, stat, icon } = props;
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('green.800', 'green.500')}
        rounded={'lg'}
        ref={ref}
        >
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('green.800', 'green.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
      </ScaleFade>
    );
  }
  
  export default function BasicStatistics() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <Box maxW="6xl" mx={'auto'} pt={{md:1}} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }} p={{base:7}}>
          <StatsCard
            title={'Service Centres'}
            stat={'9'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Years of Excellence'}
            stat={'20'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Patients Served'}
            stat={'100,000+'}
            icon={<GoLocation size={'3em'} />}
          />
          <StatsCard
            title={'Outreaches Conducted'}
            stat={'208'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }