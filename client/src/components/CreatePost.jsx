import React, { useState, useEffect } from "react";
import {
  chakra,
  Alert,
  FormControl,
  Divider,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
  SimpleGrid,
  VisuallyHidden,
  Input,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutations";
// import Auth from "../utils/auth";

export default function CreatePost() {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    comments: [],
    timePosted: "",
    tag: {},
  });

  // const [validated] = useState(false);

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createPost({
        variables: { ...postData },
      });
      console.log(data);
      // Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
    }

    setPostData({
      title: "",
      body: "",
      comments: [],
      tag: {},
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
          <Box as="form" mb={6} rounded="lg" shadow="xl" bg={["white"]} >
            <Center pb={0} color="Black" _dark={{ color: "white" }}>
              <chakra.p pt={2}>Spread the word ... Share your info</chakra.p>
            </Center>
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
                <FormControl noValidate /*validated={validated}*/ onSubmit={handleSubmit}>
                  <VisuallyHidden>Title</VisuallyHidden>
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
                <FormControl /*validated={validated}*/ onSubmit={handleSubmit}>
                  <VisuallyHidden>Post Body</VisuallyHidden>
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
              <Flex>
                <FormControl /*validated={validated}*/ onSubmit={handleSubmit}>
                  <VisuallyHidden
                    onChange={handleInputChange}
                    name="tag"
                    value={postData.tag}
                    isRequired
                  >UFO
                  </VisuallyHidden>
                </FormControl>
              </Flex>

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
                    postData.body &&
                    postData.tag &&
                    postData.comments
                  )
                }
                variant="success"
              >
                SAY YOUR PIECE
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

