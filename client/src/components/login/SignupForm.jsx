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
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <Center pb={0} color="#009D7D" _dark={{ color: "purple" }}>
              <chakra.p pt={2}>Start tuning in now</chakra.p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              // this changes the line breaks color
              color="#009D7D"
              _dark={{ color: "gray.700" }}
            >
              <Flex>
                <VisuallyHidden>First Name</VisuallyHidden>
                <Input mt={0} type="text" placeholder="First Name" />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input mt={0} type="username" placeholder="Username" />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input mt={0} type="email" placeholder="Email Address" />
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <Input mt={0} type="password" placeholder="Password" />
              </Flex>
            </SimpleGrid>
            <Flex px={6} py={4}>
              <Button
                py={2}
                w="full" type="submit"
                colorScheme="yellow"
              >
                Sign Up Today!
              </Button>
            </Flex>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <chakra.a color="white">Terms of Service</chakra.a>
          </chakra.p>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}