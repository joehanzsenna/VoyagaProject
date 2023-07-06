import React from "react";
import "./SubscriptionStyle.scss";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import subscriptionImg from "../../Assets/ComponentsAssets/SubscriptionImage01.png";
import { subscriptionInputIcon } from "../Icons/Icons";

const Subscription = () => {
  return (
    <div className="Subscription">
      <div className="SubscriptionContent">
        <div className="SubscriptionContentItem">
          <img
            src={subscriptionImg}
            alt="img"
            className="SubscriptionContentItemImage"
          />
          <Heading
            fontSize={{ base: "28px", md: "50px", lg: "55px" }}
            fontWeight={"500"}
            bg="rgba(79, 78, 78, 0.33)"
            className="header--2 mbottom1"
            style={{ color: "white" }}
          >
            Enjoy a 20% Discount
          </Heading>
          <Text
            color={"#D8DEE9"}
            fontSize={"18px"}
            w={{ base: "100%", md: "100%", lg: "80%" }}
            m="auto"
            mb={{ base: "2rem", md: "4rem" }}
            fontWeight={"400"}
            className="text--1"
          >
            From stunning natural landscapes to bustling cities and vibrant
            cultures, Nigeria has something for everyone. At TravelTrove, we're
            dedicated to helping you discover the best of Nigeria with our
            expert guidance.
          </Text>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="SubscriptionContentInput"
            />
            <Box
              borderRadius={"0 5px 5px 0"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bg="#fff"
              h={{ base: "57px", md: "75px", lg: "75px" }}
              w={{ base: "80px", md: "120px" }}
            >
              <Box
                w="120px"
                h={{ base: "35px", md: "50px" }}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                borderLeft={"1px solid grey"}
              >
                <Icon as={subscriptionInputIcon} />
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
