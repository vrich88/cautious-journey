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

export default function SignupForm() {
  // bg = background color and everything below where its placed colors it
  return (
    <Box px={8} py={24} mx="auto" bg={["primary.800"]}>

      
      
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
            color="primary.900"
            _dark={{ color: "gray.200" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Join us and tell us your truth!
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="primary.900"
            letterSpacing="wider"
          >
            Sign up today! Comes with a complementary foil hat! 
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl" bg={["white"]}>
            <Center pb={0} color="Black" _dark={{ color: "white" }}>
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
                <VisuallyHidden>User Name</VisuallyHidden>
                <Input mt={0} type="text" placeholder="Username" />
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
                bg={["primary.900" ]}
              >
                Free foil when you join!
              </Button>
            </Flex>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="primary.900">
            By signing up you agree to our{" "}
            <chakra.a color="primary.900">Terms of Service</chakra.a>
          </chakra.p>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}