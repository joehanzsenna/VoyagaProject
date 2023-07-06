import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import background from '../../../Assets/ToursPageAssets/ToursHeader_background-image.png';

const ToursPageHeader = () => {
  return (
    <Box
      as='header'
      display={`flex`}
      justifyContent={`center`}
      alignItems={`center`}
      bgImg={background}
      bgRepeat={`no-repeat`}
      bgSize={[ `cover`]}
      objectFit={[`cover`]}
      h={[`277px`,'900px']}
      w={[`100%`]}
      color={`#fff`}
    >
      <Box
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        <Heading
          fontSize={[`20px`, `38px`, `70px`]}
          fontWeight={[600, 600, 700]}
          lineHeight={[`23px`, `62.84px`, `90px`]}
          letterSpacing={[`0.520834px`, `1.4px`, `2%`]}
          textAlign={[`center`]}
          textTransform={[`capitalize`]}
          px={[`67px`, `87px`,`256px`]}
         mb={{base:`20px`, md: `18.92px`, lg: `35px`}}
        >
          Book Your Dream Tour Today
        </Heading>
        <Text
          fontSize={[`7px`,`22px`]}
          fontWeight={[500]}
          lineHeight={[`8px`,`32px`]}
          letterSpacing={[`2%`]}
          textAlign={[`center`]}
          px={[`94.5px`, `193px`,`377px`]}
         
        >
          At [Company Name], travel is not just a job, it's our passion. We
          believe that exploring new places and experiencing different{' '}
        </Text>
      </Box>
    </Box>
  );
};

export default ToursPageHeader;
