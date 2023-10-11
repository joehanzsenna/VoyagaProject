import React from "react";
import { Box, Icon, Text, Button } from "@chakra-ui/react";
import { homeSec2Icon } from "../../../Components/Icons/Icons";
import { homeSec2VidIcon } from "../../../Components/Icons/Icons";
import HomeSec2Image00 from "../../../Assets/HomepageAssets/HomeSec2Image00.svg";

const HomeSec2 = () => {
  return (
    <div className="HomeSec2">
      <div className="HomeSec2Contents">
        <Box className="HomeSec2Contents--1">
          <Box display={'flex'}
            justifyContent={{base:'center', lg:'left'}}
          >
            <Box
              display={"flex"}
              justifyContent={"end"}
              columnGap={"10px"}
              bg="#FFFFFF"
              borderRadius={"100px"}
              w="224px"
              h="56px"
              p={`16px 32px`}
              mb="2rem"
              boxShadow={
                "0px 548px 219px rgba(0, 0, 0, 0.01), 0px 308px 185px rgba(0, 0, 0, 0.04), 0px 137px 137px rgba(0, 0, 0, 0.06), 0px 34px 75px rgba(0, 0, 0, 0.07), 0px 0px 0px rgba(0, 0, 0, 0.07)"
              }
            >
              <Text color="#0FBB3F" fontSize={"13px"} fontWeight={700}>
                Explore the world!
              </Text>
              <Icon as={homeSec2Icon} w="20" h="20" />
            </Box>
          </Box>
          <Text
            as={"h1"}
            textAlign={{ base: "center", lg: "left" }}
            color={"#0F2454"}
            className="header--2 mbottom1"
          >
            Explore{" "}
            <Text as={"span"} color={"#0FBB3F"}>
              Nigeria
            </Text>{" "}
            With Our Expert Guidance
          </Text>
          <Text
            textAlign={{ base: "center", lg: "left" }}
            className="text--1 mbottom2"
          >
            From stunning natural landscapes to bustling cities and vibrant
            cultures, Nigeria has something for everyone. At TravelTrove, we're
            dedicated to helping you discover the best of Nigeria with our
            expert guidance. Our team of knowledgeable experiences.
          </Text>
          <div className="HomeSec2Contents--1Btns">
            <Button
              w="141px"
              h="49px"
              bg="#0FBB3F"
              borderRadius="100px"
              color="#fff"
              fontSize="12px"
              fontWeight={"700"}
              boxShadow={
                "0px 81px 32px rgba(0, 0, 0, 0.01), 0px 45px 27px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.09), 0px 5px 11px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)"
              }
            >
              Get Started
            </Button>

            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              columnGap={"8px"}
              w="181px"
              h="56px"
              p="16px 32px"
              gap="8px"
              bg="#FFFFFF"
              border="1px solid #EEEEEE"
              borderRadius="100px"
            >
              <Icon as={homeSec2VidIcon} w="20px" h="20px" />
              <Text fontSize={"12px"} fontWeight={"700"}>
                Watch Demo
              </Text>
            </Box>
          </div>
        </Box>
        <div className="HomeSec2Contents--2">
          <div className="HomeSec2Contents--2Inner">
            <img
              src={HomeSec2Image00}
              alt=""
              className="HomeSec2Contents--2InnerImage01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
