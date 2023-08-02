import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../ContanctsStyles/contactpage.scss";
import people1 from "../../../Assets/contactsAssets/people1.png";
import people2 from "../../../Assets/contactsAssets/people2.png";
const ContactsIndex = () => {
  return (
    <div className="contact-container">
      <Box className="hero-container">
        <Box as="section" textAlign="center" className="herosection">
          <Text as="h2">Contact Us</Text>
          <Text>
            At [Company Name], travel is not just a job, it's our passion. We
            believe that exploring new places and exploring new places and
            experiencing different.
          </Text>
        </Box>
      </Box>
      <Box as="section" className="contactinfo-container">
        <Box as="div" className="peoplecontainer">
          <Image
            src={people1}
            alt=""
            width="36.5em"
            height="44.3em"
          />
          <Image
            src={people2}
            alt=""
            className="customercare2-image"
          />
          <Box className="contacttext-container" py="20px"

          >
            <Text
              as="h2"
              color="rgba(15, 36, 84, 1)"
              fontWeight="600"
              fontSize="2.2em"
              pb="2.1rem"
            >
              Contact Info
            </Text>
            <Box className="text-container">
              <Text className="infosubheading">Let's Talk</Text>
              <Text className="infotext">
                support@tourtrove.com, info@tourtrove.ng
              </Text>
              <span className="infotext">+2348156410362</span>
            </Box>
            <Box className="text-container">
              <Text className="infosubheading">Location.</Text>
              <Text className="infotext">
                1 Ogunlesi Street, Off Awoyorkun Street, Onipanu, Lagos.
              </Text>
            </Box>
            <Box className="text-container">
              <Text className="infosubheading">Visit Us</Text>
              <Text className="infotext">www.tourtrove.ng</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactsIndex;
