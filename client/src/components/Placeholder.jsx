import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";

export default function Placeholder() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            // icon color and bg box for icons
            _light={{ bg: "white" }}
            
            color="Green"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="xl"
            fontWeight="medium"
            lineHeight="6"
            _light={{ color: "pink" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="Blue" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg="black" _dark={{ bg: "white" }} rounded="xl">
        <Box maxW="xl" mx="800" px={{ base: 6, lg: 9 }}>
          <Box textAlign={{ xl: "center" }}>
            <chakra.h2
              _light={{ color: "red" }}
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Future Updates
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{ color: "purple" }}
            >
              COMING SOON!
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="orange"
              _dark={{ color: "orange" }}
            >
           Explain about the pages and any other fun adds.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Name for page here"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
             Page description here
              </Feature>

              <Feature
                title=" Name for page here"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
              Page description here
              </Feature>

            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
