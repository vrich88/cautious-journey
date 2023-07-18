import React from "react";
import {
  chakra,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
 
  SimpleGrid,
  VisuallyHidden,
  Input
} from "@chakra-ui/react";

export default function App() {
  // bg = background color and everything below where its placed colors it
  return (
    <Box px={8} py={24} mx="auto" bg="white">
      
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            color="black"
            _dark={{ color: "gray.200" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Come, join us and tell us your truth!
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="black"
            letterSpacing="wider"
          >
            Sign up today! Comes with a complementary foil hat! 
          </chakra.p>
        </GridItem>