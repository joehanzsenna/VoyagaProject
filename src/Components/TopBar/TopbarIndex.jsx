import React from "react";
import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import mainLogo from '../../Assets/HomepageAssets/MainLogo.png'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './TopbarStyle.scss'


const TopbarIndex = () => {
  const [toggle, setToggle] = useState("navToggle");

  function menuClick() {
    if (toggle === "navToggle") {
      setToggle("navToggleActive navToggle");
    } else {
      setToggle("navToggle");
    }
  }
  return (
    <Box
      bg="rgba(0, 0, 0, 0.377)"
      w="100%"
      maxW={"1440px"}
      m="auto"
      className="topbar"
    >
      <Box
        w="90%"
        m="auto"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"3rem 0"}
        className="topbarContents"
      >
        <Box>
          <Link to="">
            <img src={mainLogo} alt="" className="mainLogo" />
          </Link>
        </Box>

        <Box
          display={{ base: "absolute", lg: "flex" }}
          alignItems={"center"}
          w={{ base: "100%", lg: "75%" }}
          justifyContent={"space-between"}
          columnGap={"2rem"}
          className={toggle}
        >
          <Box
            as="ul"
            className={""}
            listStyleType={"none"}
            display={"Flex"}
            flexDirection={{ base: "column", lg: "row" }}
            columnGap={{ base: "", lg: "4rem" }}
            rowGap={{ base: "5rem", lg: "4rem" }}
            color="white"
            fontSize={"18px"}
            mb={{ base: "5rem", lg: "0" }}
            zIndex={2}
          >
            <Link to="/">
              <Text as={"li"} _hover={{ color: "#0FBB3F" }} className="li">
                Home
              </Text>
            </Link>
            <Link to="/">
              <Text as={"li"} _hover={{ color: "#0FBB3F" }} className="li">
                Tours
              </Text>
            </Link>
            <Link to="/">
              <Text as={"li"} _hover={{ color: "#0FBB3F" }} className="li">
                About Us
              </Text>
            </Link>
            <Link to="/">
              <Text as={"li"} _hover={{ color: "#0FBB3F" }} className="li">
                Contact Us
              </Text>
            </Link>
          </Box>
          <Box
            display={"flex"}
            columnGap={"2rem"}
            justifyContent={{ base: "center", lg: "" }}
          >
            <Link to="/">
              <Button
                width={"165px"}
                bg={"transparent"}
                border={"1px solid white"}
                color={"white"}
                borderRadius={"5px"}
                cursor={"pointer"}
                height={"61px"}
                fontSize={"18px"}
              >
                Sign in
              </Button>
            </Link>
            <Link to="/">
              <Button
                color={"#fff"}
                borderRadius={"5px"}
                bg={"#0fbb3f"}
                border={"none"}
                width={"165px"}
                cursor={"pointer"}
                p={"1.5"}
                height={"61px"}
                // _hover={'bg:red,'}
                fontSize={"18px"}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
        <Box display={{ base: "", lg: "none" }}>
          <FiMenu
            style={{ cursor: "pointer" }}
            fontSize={"4rem"}
            color="#fff"
            onClick={menuClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopbarIndex;
