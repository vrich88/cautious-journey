import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST} from "../utils/mutations";
// import Auth from "../utils/auth";

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

export default function CreatePost() {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [createPost, { error }] = useMutation(CREATE_POST);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log(postData.title, postData.body);

    try {
      const { data } = await createPost({
        variables: {
          title: postData.title,
          body: postData.body,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setPostData({
      title: "",
      body: "",
      // comments: [],
      // tag: {},
    });
  };

  return (
    <Flex
      //   bg="#edf3f8"
      //   _dark={{ bg: "#3e3e3e" }}
      pt={5}
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={5}
        py={5}
        rounded="lg"
        shadow="lg"
        bg="white"
        _dark={{ bg: "gray.800" }}
      >
        <Box display="flex" alignItems="center" w="full">
          {/* post form */}
          <Box mb={6} rounded="lg" shadow="xl" bg={["white"]} >
            <Center pb={0} color="Black" _dark={{ color: "white" }}>
              <chakra.p pt={2}>Spread the word ... Share your info</chakra.p>
            </Center>
            <chakra.form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              // borderBottom="solid 1px"
              // // this changes the line breaks color
              color="#009D7D"
              _dark={{ color: "gray.700" }}
            >
              <Flex>
                <FormControl>
                  {/* <VisuallyHidden>Title</VisuallyHidden> */}
                  <Input
                    mt={0}
                    type="text"
                    placeholder="Post Title"
                    onChange={handleInputChange}
                    name="title"
                    value={postData.title}
                    isRequired
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl>
                  {/* <VisuallyHidden>Post Body</VisuallyHidden> */}
                  <Input
                    mt={0}
                    type="text"
                    placeholder="Post Story / Info"
                    onChange={handleInputChange}
                    name="body"
                    value={postData.body}
                    isRequired
                  />
                </FormControl>
              </Flex>
              {/* <Flex>
                  <FormControl>
                    <VisuallyHidden
                      onChange={handleInputChange}
                      name="tag"
                      value={postData.tag}
                      isRequired
                    >UFO
                    </VisuallyHidden>
                  </FormControl>
                </Flex> */}

              {/* <Flex>
                <FormControl  validated={validated} onSubmit={handleSubmit}>
                  <VisuallyHidden
                    onChange={handleInputChange}
                    name="tag"
                    value={postData.tag}
                    isRequired
                  >Time posted
                  </VisuallyHidden>
                </FormControl>
              </Flex> */}

            </SimpleGrid>
            <Flex px={6} py={4}>
              <Button
                py={2}
                w="full"
                type="submit"
                bg={["primary.900"]}
                disabled={
                  !(
                    postData.title &&
                    postData.body
                  )
                }
                variant="success"
              >
                SAY YOUR PIECE
              </Button>
            </Flex>
          </chakra.form>
        </Box>
      </Box>
    </Box>
    </Flex >
  );
};

