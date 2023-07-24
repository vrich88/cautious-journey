import React, { useState } from "react";
import { Box, Flex, Image, Button, Input, Link, chakra, Slider, SliderTrack } from "@chakra-ui/react";

const CreateComment = () => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic here to handle the comment submission
    // For example, you can send the comment to a backend server or store it in your state.
    console.log('Submitted comment:', comment);
    setComment('');
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
        <Box display="flex" alignItems="center" w="40rem">
          <Input
            flexWrap={"wrap"}
            flex="1"
            mr={2}
            size="md" // Set the size to large for a bigger input field
            placeholder="Enter your comment..."
            value={comment}
            onChange={handleInputChange}
          />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};




export default CreateComment;