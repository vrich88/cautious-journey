import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import {
  chakra,
  Alert,
  FormControl,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
  SimpleGrid,
  VisuallyHidden,
  Input,
} from "@chakra-ui/react";

export default function SignupForm() {
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [createUser, { error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createUser({
        variables: { 
          username: userFormData.username,
          email: userFormData.email,
          password: userFormData.password
        },
      });
      console.log(data);
      Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  // bg = background color and everything below where its placed colors it
  return (
    <Box px={8} py={24} mx="auto" bg={["black"]} h={"90vh"}>
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
          <Box mb={6} rounded="lg" shadow="xl" bg={["white"]} >
            <chakra.form 
              noValidate 
              validated={validated} 
              onSubmit={handleFormSubmit}
              // method="POST"
            >
              <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
              >
                Something went wrong with your signup!
              </Alert>
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
                  <FormControl /*noValidate validated={validated}*/ >
                    {/* <VisuallyHidden>User Name</VisuallyHidden> */}
                    <Input
                      mt={0}
                      type="text"
                      placeholder="Username"
                      onChange={handleInputChange}
                      name="username"
                      value={userFormData.username}
                      isRequired
                    />
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl /*noValidate validated={validated}*/ >
                    {/* <VisuallyHidden>Email Address</VisuallyHidden> */}
                    <Input
                      mt={0}
                      type="email"
                      placeholder="Email Address"
                      onChange={handleInputChange}
                      name="email"
                      value={userFormData.email}
                      isRequired
                    />
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl /*noValidate validated={validated}*/ >
                    {/* <VisuallyHidden>Password</VisuallyHidden> */}
                    <Input
                      mt={0}
                      type="password"
                      placeholder="Password"
                      onChange={handleInputChange}
                      name="password"
                      value={userFormData.password}
                      isRequired
                    />
                  </FormControl>
                </Flex>
              </SimpleGrid>
              <Flex px={6} py={4}>
                <Button
                  py={2}
                  w="full"
                  type="submit"
                  bg={["primary.900"]}
                  disabled={
                    !(
                      userFormData.username &&
                      userFormData.email &&
                      userFormData.password
                    )
                  }
                  variant="success"
                >
                  Take the Red Pill
                </Button>
              </Flex>
            </chakra.form>
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