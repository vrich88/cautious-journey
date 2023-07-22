import React from "react";
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  SimpleGrid,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import alien from "../../images/alien.png"

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue("primary.200", "primary.900");
  const hbg = useColorModeValue("primary.900", "primary.900");
  // Text color
  const tcl = useColorModeValue("black", "gray.50");
  const dcl = useColorModeValue("black", "gray.50");
  const hbgh = useColorModeValue("black", "brand.500");

  const Section = (props) => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        bg= "white"
        _hover={{
          bg: hbg,
        }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (
    <React.Fragment>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
          lg: 5,
        }}
        pos="relative"
        gap={{
          base: 6,
          sm: 8,
        }}
        px={5}
        py={6}
        p={{
          sm: 8,
        }}
      >
        <Section
          title="Analytics"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          }
        >
          High traffic stories move up high on your feed. You will never miss out on a strange encounter.
        </Section>

        <Section
          title="Engagement"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          }
        >
          Engage in conversations with other true believers.
        </Section>

        <Section
          title="Security"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-w="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        >
          We can't promise security, but we know a guy who can fight.
        </Section>

        
      </SimpleGrid>
      
    </React.Fragment>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header
        h="full"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/">
            {/* Replace with your logo */}
            <chakra.img boxSize="50px" src={ alien } alt="Logo" />
          </Link>
          <Box
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <HStack spacing={1}>
              <Box role="group">
                <Button
                  bg={bg}
                  color="gray.500"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: cl,
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                  rightIcon={<IoIosArrowDown />}
                >
                  Features
                </Button>
                <Box
                  pos="absolute"
                  left={0}
                  w="full"
                  display="none"
                  _groupHover={{
                    display: "block",
                  }}
                >
                  {Features}
                </Box>
              </Box>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                UFO's
              </Button>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                Cryptid's
              </Button>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                The Other's
              </Button>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              <Button colorScheme="brand" variant="solid" size="sm">
                Sign up
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{
                base: "0",
                md: "3",
              }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;