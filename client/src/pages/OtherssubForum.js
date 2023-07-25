import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

const OtherssubForum = () => {
  return (
    <>
        <Flex
          bg="lavender"
          _dark={{ bg: "#3e3e3e" }}
          p={5}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            px={8}
            py={4}
            minW="80vw"
            rounded="lg"
            shadow="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            maxW="2xl"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <chakra.span
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
              </chakra.span>
              <chakra.span
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
              </chakra.span>

            </Flex>

            <Box mt={2}>
              <Link
                fontSize="2xl"
                color="gray.700"
                _dark={{ color: "white" }}
                fontWeight="700"
                _hover={{
                  color: "gray.600",
                  _dark: {
                    color: "gray.200",
                  },
                  textDecor: "underline",
                }}
              >
              </Link>

            </Box>
          </Box>
        </Flex>
    </>
  );
};

export default OtherssubForum;