import { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex
  
} from '@chakra-ui/react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
//login logic here
    console.log('Username:', username);
    console.log('Password:', password);
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
          type="username"
          placeholder="Enter your username"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" marginBottom="5">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="purple" onClick={handleLogin}>Login</Button>
    </Box>
    </Box>
</Flex>
  );
};

export default LoginForm;