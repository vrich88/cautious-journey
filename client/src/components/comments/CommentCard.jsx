import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  chakra,
  VStack,
  Slider,
  SliderTrack,
} from "@chakra-ui/react";

const CommentCard = () => {
  return (
    <>
      {/* add mapping logic for comment arrays */}
      <Flex
        // bg="#edf3f8"
        // _dark={{ bg: "#3e3e3e" }}
        p={20}
        w="6xl"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={5}
          py={5}
          rounded="lg"
          // shadow="lg"
          // bg=""
          _dark={{ bg: "gray.800" }}
          maxW= "12xl"
        >
          <VStack spacing={{ base: 10, md: 0 }} gridRowGap={{ md: "1rem" }}>
            {/* individual comment */}
            <Box
              mx="auto"
              px={5}
              py={5}
              rounded="lg"
              shadow="lg"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="12xl"
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
                <chakra.p
                  mt={2}
                  mx={5}
                  textAlign="justify"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </chakra.p>
              </Box>
            </Box>


            {/* sample comment for mapped "envisioning; delete when mapping logic added" */}
            <Box
              mx="auto"
              px={5}
              py={5}
              rounded="lg"
              shadow="lg"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="6xl"
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
                <chakra.p
                  mt={2}
                  mx={5}
                  textAlign="justify"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </chakra.p>
              </Box>
            </Box>
            <Box
              mx="auto"
              px={5}
              py={5}
              rounded="lg"
              shadow="lg"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="6xl"
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
                <chakra.p
                  mt={2}
                  mx={5}
                  textAlign="justify"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </chakra.p>
              </Box>
            </Box>
            {/* individual comment ample for map "envisioning; delete when mapping logic added" */}



          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default CommentCard;
