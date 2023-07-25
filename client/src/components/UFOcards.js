import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";
import UFOseeds from "../assets/data/UFOseeds";
import { useQuery } from "@apollo/client";

const UFOcards = () => {
  return (
    <>
      {UFOseeds.map((UFOseed) => (
        <Flex
          key={UFOseed.id}
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
                {UFOseed.timePosted}
              </chakra.span>
              <chakra.span
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                by {UFOseed.user}
              </chakra.span>

            </Flex>

            <Box mt={2}>
              <Link
              href="/reader"
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
                {UFOseed.title}
              </Link>

            </Box>
          </Box>
        </Flex>
      ))};
    </>
  );
};

export default UFOcards;