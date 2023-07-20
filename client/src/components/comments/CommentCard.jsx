import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

const CommentCard = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
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
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
            Khatab wedaa
          </chakra.span>
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
            Mar 10, 2019
          </chakra.span>
        </Flex>
        
        <Box mt={2}>
          <chakra.p mt={2} mx={5} textAlign="justify" color="gray.600" _dark={{ color: "gray.300" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
};

export default CommentCard;
