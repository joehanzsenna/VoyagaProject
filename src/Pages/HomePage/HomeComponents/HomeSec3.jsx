import React, { useState } from "react";
import { ToursDb } from "./HomeIndexDB";
import { Box, Icon, Text } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { homeSec3LocationIcon } from "../../../Components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HomeSec3 = () => {
  const [place] = useState(ToursDb);

  return (
    <div className="HomeSec3">
      <div className="HomeSec3Contents">
        <div className="HomeSec3ContentsText">
          <Box>
            <Text
              as="header"
              textAlign={{ base: "left", md: "center" }}
              fontSize={{ base: "3.5rem", md: "45px" }}
              fontWeight="600"
            >
              Discover{" "}
              <Text as="span" color={"#0FBB3F"}>
                Top Tours
              </Text>{" "}
              Of 2023
            </Text>
          </Box>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-nexting",
            prevEl: ".swiper-button-previous",
            clickable: true,
          }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
          className="HomeSec3ContentsInner"
        >
          {place.map((ToursDb) => {
            const { id, image, place, location, price } = ToursDb;
            return (
              <SwiperSlide key={id} className="HomeSec3ContentsInnerFrame">
                <img src={image} alt="" className="HomeSec3ContentsInnerImg" />
                <h4 className="HomeSec3ContentsInnerPlace">{place}</h4>
                <h5 className="HomeSec3ContentsInnerLocation">
                  <Icon as={homeSec3LocationIcon} />
                  {location}
                </h5>
                <div className="innerFlex">
                  <h5 className="HomeSec3ContentsInnerPrice">
                    N {price} <span style={{ color: "#98A2B3" }}> /Visit</span>
                  </h5>
                  <button className="btn--Tours">Buy Now</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          w="100%"
          display={"flex"}
          justifyContent={"center"}
          mt="10rem"
          columnGap={"4rem"}
        >
          <Box
            w="100px"
            h="100px"
            borderRadius={"100px"}
            border={"1px solid rgba(25, 24, 37, 0.1)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <BsArrowLeft className="swiper-button-previous navArrowLeft" />
          </Box>
          <Box
            w="100px"
            h="100px"
            borderRadius={"100px"}
            border={"1px solid rgba(25, 24, 37, 0.1)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#0FBB3F"}
            cursor={"pointer"}
          >
            <BsArrowRight className="swiper-button-nexting navArrowRight" />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default HomeSec3;
