import { Box } from "@chakra-ui/react";
import React from "react";
// import NavbarIndex from "../../Navbar/NavbarIndex";
import FooterIndex from "../../Footer/FooterComponents/FooterIndex";
import TopbarIndex from "../../TopBar/TopbarIndex";

const ExternalLayout = (props) => {
  return (
    <Box width={"100%"} >
      <Box>
        <TopbarIndex />
        {/* <NavbarIndex/> */}
      </Box>
      <Box >{props.children}</Box>
      <Box>
        <FooterIndex />
      </Box>
    </Box>
  );
};

export default ExternalLayout;
