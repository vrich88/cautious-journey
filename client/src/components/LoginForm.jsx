import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  chakra,
  Alert,
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
    username: '',
    password: '',
  });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { 
          username: userData.username,
          password: userData.password
        },
      });
      console.log(data);
      Auth.login(data.login.token);
      console.log(data.login.token);
      // if (data) {
      //   console.log(`good job being alive, ${data.username}`)
      // }
    } catch (err) {
      console.log(err);
    }

    setUserData({
      username: '',
      password: '',
    })
  };
  // housing here
  return (
    <Flex>
      <Box display="flex" justifyContent="flex-start" m={0} bg={["black"]} w="full" h="90vh">
        <Box
          maxWidth="sm"
          margin="0 auto"
          borderWidth="0px"
          borderRadius="md"
          boxShadow="md"
          mt="10"
        >
          <chakra.form
            noValidate 
            validated={validated} 
            onSubmit={handleLogin}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              WHY ARE YOU TRYING TO TRICK US
            </Alert>
            <Heading size="lg" marginBottom="9" color="primary.900">Login</Heading>
            <FormControl id="username" marginBottom="4" color="primary.900">
              <FormLabel>User Name</FormLabel>
              <Input
            
              type="text"
              placeholder="Enter your username"
              name="username"
              value={userData.username}
              onChange={handleInput}
              />
            </FormControl>
            <FormControl id="password" marginBottom="5" color="primary.900">
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
          <Box color='white'>

              />
            </FormControl>
            <Button 
              colorScheme="purple" 
              type="submit"
              disabled={
                !(
                  userData.username &&
                  userData.password
                )
              }>
                Login
              </Button>
          </chakra.form>
        <Box color="white">
        <h2> Not a member?</h2>
        <Link href="/signup">
        <Button colorScheme="gray" size="sm">
          Sign-Up
        </Button>
        </Link>
      </Box>
        </Box>
      </Box> 
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;