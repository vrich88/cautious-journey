import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/provider';
import customTheme from "./utils/theme";

// make sure to add appropriate styling imports (chakra etc)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);