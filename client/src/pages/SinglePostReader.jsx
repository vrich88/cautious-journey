import React from 'react';
import CommentCard from '../components/CommentCard';
import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Center,
  Stack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function SinglePostReader() {
  return (
    <Flex
      //   bg="#edf3f8"
      //   _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
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
        maxW="12xl"

        borderTopLeftRadius={"6px"}
        borderTopRightRadius={"3px"}
        borderBottomLeftRadius={"6px"}
        borderBottomRightRadius={"3px"}
        boxShadow={"10px -5px 30px black, 10px -5px rgb(181 166 145) "}
        bgGradient="linear(to-t, rgb(200 162 112), tan, tan)"
      >

        <Box p={4}>

          <Flex
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            alignItems="center"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                John Doe
              </Text>
              <Text>Posted on July 21, 2023</Text>
            </Box>
          </Flex>
          <Box mt={4}>
            <Heading size="md">Forum Post Title</Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
              tincidunt nisi. Etiam tristique lacus sit amet neque bibendum
              mollis. Vivamus nec massa vel nulla cursus pharetra. Sed quis
              pellentesque justo. Integer consequat libero eget tincidunt
              eleifend.
            </Text>
          </Box>
          <Divider my={4} />
          <Center>

          </Center>
          <Divider my={4} />
          <Center>
            <Stack direction="row" spacing={4}>
              <EditIcon boxSize={6} />
              <DeleteIcon boxSize={6} />
            </Stack>
          </Center>
        </Box>
        < CommentCard />
      </Box>
    </Flex>
  );
}


export default SinglePostReader;