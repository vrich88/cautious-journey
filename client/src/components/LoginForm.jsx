import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Link
} from '@chakra-ui/react';

const LoginForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInput = async (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(userData);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await loginUser({
        variables: { ...userData },
      });
      console.log(data);
      Auth.loginUser(data.loginUser.token);
    } catch (err) {
      console.log(err);
    }

    setUserData({
      username: "",
      password: "",
    })
  };
  // housing here
  return (
    <Flex>
      <Box display="flex" justifyContent="flex-start" m={6}>
        <Box
          maxWidth="sm"
          margin="0 auto"
          padding="8"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >

          <Heading size="lg" marginBottom="9">Login</Heading>
          <FormControl id="username" marginBottom="4">
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={userData.username}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl id="password" marginBottom="5">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
          </FormControl>
          <Button colorScheme="purple" onClick={handleLogin}>Login</Button>
        </Box>
      </Box>

      <Box>
        <h2> Not a member?</h2>
        <Button colorScheme="gray" size="sm">
          <Link href="/signup">Sign-Up</Link>
        </Button>
      </Box>

    </Flex>
  );
};

export default LoginForm;