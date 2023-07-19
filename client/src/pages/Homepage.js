import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
  Center,
  Square,
  Container,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

export default function Homepage() {
  // const mobileNav = useDisclosure();
  return (
    <Box as="main" p="4">
      <Flex>
        {/* Add content here, remove div below  /}
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
          </Box>
          <Box as="main" p="4">
            {/ Add content here, remove div below  */}
        {/* Black device Container */}
        <Box
          borderWidth="0px"
          rounded="md"
          h="80vh"
          w={{ base: "700px", md: "300px", lg: "35%" }}
        >
          <Flex justifyContent={"center"}>
            {/* Black device */}
            <Box
              borderWidth="4px"
              borderColor={"black"}
              backgroundColor={"blackAlpha.800"}
              mt={"20"}
              h="60vh"
              w={{ base: "350px", md: "270px", lg: "20rem" }}
              borderBottomRightRadius={120}
              borderBottomLeftRadius={120}
              borderTopRightRadius={10}
              borderTopLeftRadius={10}
            >
              <Flex justifyContent={"space-between"} pt="0.4rem" px="0.4rem">
                <Button colorScheme="gray" size="sm">
                  Login
                </Button>

                <Button colorScheme="gray" size="sm">
                  Sign-Up
                </Button>
              </Flex>

              <Flex justifyContent={"center"}>
                <Box
                  borderWidth="4px"
                  borderColor={"gray"}
                  mt={"2"}
                  h="170px"
                  w={{ base: "170px", md: "170px", lg: "170px" }}
                  borderRadius="full"
                ></Box>
              </Flex>

              <Flex justifyContent={"center"}>
                <Box
                  borderWidth="4px"
                  borderColor={"gray"}
                  mt={"8"}
                  h="200px"
                  w={{ base: "170px", md: "170px", lg: "170px" }}
                  pt="3"
                  borderRadius="15"
                >
                  <Flex flexDirection={"column"}>
                    <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                      Dashboard
                    </Button>
                    <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                      About
                    </Button>
                    <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                      Contact
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        {/* Folder Container */}
        <Box
          borderWidth="0px"
          rounded="md"
          h="80vh"
          w={{ base: "1px", md: "1px", lg: "65%" }}
        >
          <Flex justifyContent={"center"}>
            <Box
              borderWidth="0px"
              borderColor={"white"}
              mt={"20"}
              h={{ base: "0px", md: "0px", lg: "60vh" }}
              w={{ base: "0rem", md: "0px", lg: "50rem" }}
            >
              {/* Folder */}
              <Box
                borderWidth="0px"
                borderColor={"tan"}
                backgroundColor={"tan"}
                mt={"4rem"}
                h={{ base: "0px", md: "52vh", lg: "52vh" }}
                w={{ base: "15rem", md: "30rem", lg: "40rem", xl: "50rem" }}
                borderTopLeftRadius={"6px"}
                borderTopRightRadius={"3px"}
                borderBottomLeftRadius={"6px"}
                borderBottomRightRadius={"3px"}
                boxShadow={"10px -5px 30px black, 10px -5px rgb(181 166 145) "}
              ></Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
