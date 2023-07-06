import { Box, Heading, Text } from '@chakra-ui/react';
import ToursDb from '../data';
// import { useState } from 'react';
import location from '../../../Assets/ToursPageAssets/ToursPageIcons/location.svg';
import forward from '../../../Assets/ToursPageAssets/ToursPageIcons/forward_arrow.svg';

const ToursPageExplore = () => {
  // const [ToursDb] = useState(ToursDb)
  return (
    <Box>
      <Box 
      display={`flex`} 
      justifyContent={`center`}
       alignItems={`center`}
       >
        <Heading
         textAlign={`center`}
         fontSize={{lg: `45px`}}
         fontWeight={{lg: 600}}
         lineHeight={{lg: `54px`}}
         textTransform={`capitalize`}
         color={`#0f2454`}
         mt={{lg: `117px`}}
         mb={{lg: `85px`}}
         
         >
          Explore All Available Tours
          </Heading>
      </Box>

      <Box bgColor={`#fff`} padding={`0 40px`}>
        <Box
          display={`grid`}
          gridTemplateColumns={{ sm: `repeat(2, auto)`, md: `repeat(3, auto)` }}
          gap={`30px`}
        >
          {ToursDb.map((item, id) => (
            <Box
              key={id}
              boxShadow={`0px 1.9567780494689941px 3.9135560989379883px 0px rgba(14, 85, 124, 0.16)`}
              p={`20px`}
            >
              <img
                src={item.image}
                alt={`image`}
                width={{ lg: `358.38px` }}
                height={{ lg: `314.37px` }}
                borderRadius={{ lg: `14px` }}
              />
              <Text mt={{ lg: `20.96px` }}>{item.place}</Text>
              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={`center`}
                gap={`9px`}
              >
                <Box
                  border={`2px solid red`}
                  display={`flex`}
                  justifyContent={`center`}
                  alignSelf={`center`}
                  mt={`10px`}
                  //
                >
                  <img
                    src={location}
                    alt=''
                    width={`10.522px`}
                    height={`15.032px`}
                  />
                </Box>

                <Text
                  mt={{ lg: `13.36px` }}

                  // mb=
                >
                  {item.location}
                </Text>
              </Box>
              <Box
                display={`flex`}
                flexDir={`row`}
                justifyContent={`space-between`}
                alignItems={`center`}
                mt={{ lg: `24px` }}
              >
                <Text>
                  &#8358;{item.price}/<span>Visit</span>
                </Text>
                <Box
                  display={`flex`}
                  justifyContent={`center`}
                  alignItems={`center`}
                  gap={`10px`}
                  style={{ translate: `-33px 0` }}
                  border={`1.048px solid #0FBB3F`}
                  borderRadius={{ lg: `5.24px` }}
                  w={{ lg: `134.132px` }}
                  h={{ lg: `39.82px` }}
                  p={{ lg: `10.479px` }}
                >
                  <button>{item.text}</button>
                  <Box
                    display={`flex`}
                    justifyContent={`center`}
                    alignSelf={`center`}
                    mt={`3px`}
                  >
                    <img src={forward} width={`8.519px`} height={`7.859px`} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ToursPageExplore;
