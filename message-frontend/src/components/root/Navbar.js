import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Button } from "@chakra-ui/react";
import whatsapp from "../../assets/icons/Whatsapp.svg";

function Navbar() {
  
  return (
    // Header
    <Box
      h={{ lg: "91px", md: "74px" }}
      d="flex"
      flexDirection="row"
      backgroundColor="#128c7e"
      maxW="100%"
      minW="100%"
      justifyContent="center"
      alignItems="center"
   
    >

      <Box
        d="flex"
        pr={{ md: "32px" }}
        pl={{ md: "32px" }}
        maxW={{ md: "1050px" }}
        flexDirection="row"
        color="white"
        lineHeight="26px"
        width="100%"
        alignItems="center"
        justifyContent="space=between"
    
      >
        <Box d="flex" w="80%" alignItems="center">
          <Box minW="160px">
            <Link to="/">
              <Image src={whatsapp} alt="Brand Logo" />
            </Link>
          </Box>
        </Box>
        <Box
          d="flex"
          minW={{ md: "90%", lg: "80%" }}
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexGrow="1"
          >
            <Link to="/web">WHATSAPP WEB</Link>

            <Link to="/features">FEATURES</Link>

            <Link to="/download">DOWNLOAD</Link>

            <Link to="/security">SECURITY</Link>

            <Link to="/help-center">HELP CENTER</Link>
          </Box>

          <Button
            colorScheme="transparent"
            
            variant ="ghost"
          >
            <h5 style={{ padding: "0 4px" }}>Login</h5>
          </Button>
        </Box>
      </Box>

      {/* </Flex> */}
    </Box>
  );
}
export default Navbar;
