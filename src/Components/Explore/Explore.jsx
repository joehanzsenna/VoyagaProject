import React, { useState } from 'react'
import './ExploreStyles.scss'
import { ExploreDb } from '../../Pages/HomePage/HomeComponents/HomeIndexDB'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box, Heading, Text } from '@chakra-ui/react';

const Explore = () => {
    const [places] = useState(ExploreDb)

    return (
      <div className="Explore">
        <div className="ExploreContents">
          <div className="ExploreContentsHeader">
            <Heading
              color={"#0F2454"}
              fontWeight={"600"}
              fontFamily={"Poppins"}
              fontSize={{ base: "20px", md: "45px" }}
              w={{ base: "" }}
              textAlign={{ base: "center",md:'center', lg: "left" }}
              className="header--2"
            >
              Explore Nigeria: Latest Tips and Insights For Touring
            </Heading>
          </div>

          <Swiper
            className="ExploreContentsInner"
            slidesPerView={"3"}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-nextent",
              prevEl: ".swiper-button-prevent",
              clickable: true,
            }}
            modules={[Navigation]}
            breakpoints={{
              // 320: {
              //   slidesPerView: 1,
              // },
              375: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {places.map((ExploreDb) => {
              const { id, image, description, text, month, day } = ExploreDb;
              return (
                <SwiperSlide key={id} className="ExploreContentsInnerItem">
                  <img
                    src={image}
                    alt=""
                    className="ExploreContentsInnerItemImg"
                  />
                  <div className="InnerContent">
                    <h6 className="ExploreText1">{description}</h6>
                    <h5 className="ExploreText2">{text}</h5>
                  </div>
                  <Box
                    position={"absolute"}
                    top={"2rem"}
                    left={"2rem"}
                    bg="#0FBB3F"
                    color={"#fff"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    p="4px 8px"
                  >
                    <Text fontSize={"10px"}>{month}</Text>
                    <Text fontSize={"18px"}>{day}</Text>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box
            w="100%"
            display={"flex"}
            justifyContent={"center"}
            mt="4rem"
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
              <BsArrowLeft className="swiper-button-prevent navArrowLeft" />
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
              <BsArrowRight className="swiper-button-nextent navArrowRight" />
            </Box>
          </Box>
        </div>
      </div>
    );
}

export default Explore