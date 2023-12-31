import React from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
  Hide,
  Link,
} from "@chakra-ui/react";

import { plastic, Cgif } from "../assets/data/data.js"
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

export default function Homepage() {
  // const mobileNav = useDisclosure();
  return (
    <Box as="main" p="4" bg={["primary.800"]}>
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
            {/* 2nd Black device Container*/}
            <Box
              borderWidth="0px"
              borderColor={"white"}
              backgroundColor={""}
              mt={"16"}
              h={{ base: "70vh", sm: "65vh", md: "70vh", xl: "60vh" }}
              w={{ base: "350px", md: "270px", lg: "20rem" }}

            >
              {/* Black device */}
              <Box
                borderWidth="0.5px"
                borderColor={"blackAlpha.600"}
                backgroundColor={"gray.900"}
                mt={"5"}
                h={{ base: "65vh", sm: "65vh", md: "60vh", xl: "60vh" }}
                w={{ base: "350px", md: "270px", lg: "20rem" }}
                borderBottomRightRadius={120}
                borderBottomLeftRadius={120}
                borderTopRightRadius={6}
                borderTopLeftRadius={6}
                backgroundImage={plastic.image}
                boxShadow={"-5px -2px 20px black, -8px -4px 0px rgb(51 50 52), -3px -4px 0px rgb(51 50 52), -4px -6px 0px rgb(39 38 40), -10px -6px 0px rgb(39 38 40)"}
              >
                <Flex justifyContent={"space-between"} pt="0.4rem" px="0.4rem">
                  <Link href="/login">
                    <Button colorScheme="gray" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button colorScheme="gray" size="sm">
                      Sign-Up
                    </Button>
                  </Link>
                </Flex>

                <Flex justifyContent={"center"}>
                  <Box
                    borderWidth="4px"
                    boxShadow={"0px 0px 30px black"}
                    borderColor={"gray.600"}
                    mt={"2"}
                    h="170px"
                    w={{ base: "170px", md: "170px", lg: "170px" }}
                    borderRadius="full"
                    backgroundImage={Cgif.image}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize={200}

                  >
                    {/* <Image src={Cgif.image} objectFit='cover'  borderRadius="full" w={{ base: "170px", md: "170px", lg: "170px" }} h="160px"/> */}
                    <Text mt="14" align="center" color={"green.200"} fontSize={25}>Equinox </Text>
                  </Box>
                </Flex>

                <Flex justifyContent={"center"}>
                  <Box
                    borderWidth="4px"
                    boxShadow={"0px 0px 30px black"}
                    borderColor={"gray.600"}
                    mt={"8"}
                    h={{ base: "200px", md: "200px", lg: "190px", xl: "200px" }}
                    w={{ base: "170px", md: "170px", lg: "170px" }}
                    pt="3"
                    borderRadius="15"
                  >
                    <Flex flexDirection={"column"} flexWrap={"wrap"} alignContent={"space-between"}>
                      <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                        Special
                      </Button>
                      <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                      Features
                      </Button>
                      <Button colorScheme="gray" size="sm" w={"160px"} mt={4}>
                      Coming Soon....
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

            </Box>

          </Flex>

        </Box>
        {/* Folder Container */}
        <Box
          borderWidth="0px"
          rounded="md"
          h="80vh"
          w={{ base: "0px", md: "20rem", lg: "65%" }}
        >
          <Flex justifyContent={"center"}>
            {/* Folder tabs Container */}
            <Box
              borderWidth="0px"
              borderColor={"white"}
              mt={"20"}
              h={{ base: "0px", md: "0px", lg: "60vh" }}
              w={{ base: "0rem", md: "20rem", lg: "50rem" }}
            >
              <Hide breakpoint='(max-width: 766px)'>
                <Tabs isFitted variant='enclosed' borderColor={"white"} >
                  <TabList mb='auto' bg="tan" colorScheme="" ml="10px" borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"}
                    w={{ base: "0px", md: "auto", lg: "400px" }}
                    h={{ base: "0px", md: "30px", lg: "auto" }}
                  >
                    <Tab mr="0px" borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"}
                      w={{ base: "auto", md: "auto", lg: "400px" }}
                      h={{ base: "auto", md: "auto", lg: "auto" }}
                    >What We Believe</Tab>
                    <Tab borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"}
                      w={{ base: "auto", md: "auto", lg: "400px" }}
                      h={{ base: "auto", md: "auto", lg: "auto" }}
                    >Top Users</Tab>
                    <Tab borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"}
                      w={{ base: "auto", md: "auto", lg: "400px" }}
                      h={{ base: "auto", md: "auto", lg: "auto" }}
                    >Top Posts</Tab>
                  </TabList>

                  <TabIndicator
                    height="2px"
                    bg="tan"
                    borderRadius={"50px"}
                    mt="-1.5px"
                  />
                  {/* Folder */}
                  <Box
                    borderWidth="0.5px"
                    borderColor={"white"}
                    // backgroundColor={"tan"}
                    mt={"0rem"}
                    h={{ base: "0px", md: "52vh", lg: "52vh" }}
                    w={{ base: "15rem", md: "30rem", lg: "40rem", xl: "50rem" }}
                    borderTopLeftRadius={"6px"}
                    borderTopRightRadius={"3px"}
                    borderBottomLeftRadius={"6px"}
                    borderBottomRightRadius={"3px"}
                    boxShadow={"10px -5px 30px black, 10px -5px rgb(181 166 145) "}
                    bgGradient="linear(to-t, rgb(200 162 112), tan, tan)"
                  >
                    <TabPanels>
                      <TabPanel>
                        <p>Equinox is a forum for avid believers of the unexplained. Whether you've seen a UFO, the Moth Man, or had a real life encouter with a spirit, we believe you and your story is wanted. Become a member to login, contribute to conversations, and discuss the truth with friends all over the world!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>We will be showcasing the top 10 users on our site here and this will be updated in the future!</p>
                      </TabPanel>
                      <TabPanel>
                        <p>The top posts that have the most likes and comments will display here and this will be updated regularly.</p>
                      </TabPanel>
                    </TabPanels>
                  </Box>
                </Tabs>
              </Hide>
            </Box>

          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
