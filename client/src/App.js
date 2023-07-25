import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import UFOsubForum from "./pages/UFOsubForum";
import CryptidsubForum from "./pages/CryptidsubForum";
import OtherssubForum from "./pages/OtherssubForum";
import { Switch } from "@chakra-ui/react";
import SinglePostReader from "./pages/SinglePostReader";
// import SinglePostReader from "./pages/SinglePostReader"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        {/* <Switch> */}
        <Routes>
          {/* testing  */}
          {/* <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/ufo" component={UFOsubForum} />
          <Route exact path="/cryptid" component={CryptidsubForum} />
          <Route exact path="/others" component={OtherssubForum} /> */}


            {/* below works on local host */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/ufo" element={<UFOsubForum />} />
          <Route path="/cryptid" element={<CryptidsubForum />} />
          <Route path="/others" element={<OtherssubForum />} />
          <Route path="/reader" element={<SinglePostReader/>} />
        </Routes>
        {/* </Switch> */}
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
