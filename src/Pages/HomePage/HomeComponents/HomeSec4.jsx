import React from "react";
import HomeSec4Image01 from "../../../Assets/HomepageAssets/HomeSec4Image01.png";
import HomeSec4Image02 from "../../../Assets/HomepageAssets/HomeSec4Image02.png";
import HomeSec4Image03 from "../../../Assets/HomepageAssets/HomeSec4Image03.png";
import HomeSec4Image04 from "../../../Assets/HomepageAssets/HomeSec4Image04.png";
import HomeSec4Image05 from "../../../Assets/HomepageAssets/HomeSec4Image05.png";
import { homeSec3LocationIcon } from "../../../Components/Icons/Icons";
import { Box, Button, Icon, Text } from "@chakra-ui/react";

const HomeSec4 = () => {
  return (
    <div className="HomeSec4">
      <div className="HomeSec4Contents">
        <Text textAlign={"left"} mb="4rem" className="header--2">
          Popular{" "}
          <Text as={"span"} color={"#0FBB3F"}>
            Destinations
          </Text>
        </Text>
        <div className="HomeSec4ContentsImages">
          <div className="HomeSec4Inner1 InnerContainer">
            <img
              src={HomeSec4Image01}
              alt=""
              className="HomeSec4InnerImages "
            />
            <div className="innerContents">
              <Box>
                <Text
                  fontSize={{ base: "", md: "18px", lg: "28px" }}
                  color={"#fff"}
                  fontWeight={"400"}
                >
                  Yankari Game Reserve
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"8px"}
                  color={"#fff"}
                  fontSize={{ base: "", md: "16px", lg: "25px" }}
                >
                  <Icon as={homeSec3LocationIcon} w="10rem" h="10rem" />
                  Bauchi
                </Text>
              </Box>
              <Button
                color={"#0FBB3F"}
                bg="transparent"
                border={"1px solid #0FBB3F"}
                width={{ base: "110px", md: "130px", lg: "170px" }}
                fontSize={{ base: "12px", md: "", lg: "20px" }}
                h={{ base: "35px", md: "40px", lg: "48px" }}
                borderRadius={"8px"}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="HomeSec4Inner2 InnerContainer">
            <img
              src={HomeSec4Image02}
              alt=""
              className="HomeSec4InnerImages SeconImg"
            />
            <div className="innerContents">
              <Box>
                <Text
                  fontSize={{ base: "", md: "12px", lg: "18px" }}
                  color={"#fff"}
                  fontWeight={"400"}
                >
                  Olumo Rock
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"8px"}
                  color={"#fff"}
                  fontSize={{ base: "", md: "12px", lg: "15px" }}
                >
                  <Icon as={homeSec3LocationIcon} w="10rem" h="10rem" />
                  Abeokuta
                </Text>
              </Box>
              <Button
                color={"#0FBB3F"}
                bg="transparent"
                border={"1px solid #0FBB3F"}
                width={{ base: "110px", md: "90px", lg: "110px" }}
                fontSize={{ base: "12px", md: "11px", lg: "13px" }}
                height={{ base: "35px", md: "28px", lg: "35px" }}
                borderRadius={"8px"}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="HomeSec4Inner3 InnerContainer">
            <img
              src={HomeSec4Image03}
              alt=""
              className="HomeSec4InnerImages "
            />
            <div className="innerContents">
              <Box>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                  color={"#fff"}
                  fontWeight={"400"}
                >
                  Idanre Hill
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"8px"}
                  color={"#fff"}
                  fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                >
                  <Icon as={homeSec3LocationIcon} w="10rem" h="10rem" />
                  Lekki, Lagos.
                </Text>
              </Box>
              <Button
                color={"#0FBB3F"}
                bg="transparent"
                border={"1px solid #0FBB3F"}
                width={{ base: "110px", md: "90px", lg: "110px" }}
                fontSize={{ base: "12px", md: "11px", lg: "13px" }}
                height={{ base: "35px", md: "28px", lg: "35px" }}
                borderRadius={"8px"}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="HomeSec4Inner4 InnerContainer">
            <img
              src={HomeSec4Image04}
              alt=""
              className="HomeSec4InnerImages "
            />
            <div className="innerContents">
              <Box>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "15px" }}
                  color={"#fff"}
                  fontWeight={"400"}
                >
                  Conservation Centre, Lekki
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"8px"}
                  color={"#fff"}
                  fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                >
                  <Icon as={homeSec3LocationIcon} w="10rem" h="10rem" />
                  Onikan Lagos
                </Text>
              </Box>
              <Button
                color={"#0FBB3F"}
                bg="transparent"
                border={"1px solid #0FBB3F"}
                width={{ base: "110px", md: "90px", lg: "110px" }}
                fontSize={{ base: "12px", md: "11px", lg: "13px" }}
                height={{ base: "35px", md: "28px", lg: "35px" }}
                borderRadius={"8px"}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="HomeSec4Inner5 InnerContainer">
            <img
              src={HomeSec4Image05}
              alt=""
              className="HomeSec4InnerImages "
            />
            <div className="innerContents">
              <Box>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "15px" }}
                  color={"#fff"}
                  fontWeight={"400"}
                >
                  Nigeria National Museum
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"8px"}
                  color={"#fff"}
                  fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                >
                  <Icon as={homeSec3LocationIcon} w="10rem" h="10rem" />
                  Onikan Lagos
                </Text>
              </Box>
              <Button
                color={"#0FBB3F"}
                bg="transparent"
                border={"1px solid #0FBB3F"}
                width={{ base: "110px", md: "90px", lg: "110px" }}
                fontSize={{ base: "10px", md: "11px", lg: "13px" }}
                height={{ base: "35px", md: "28px", lg: "35px" }}
                borderRadius={"8px"}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec4;
