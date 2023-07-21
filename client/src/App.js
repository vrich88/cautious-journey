import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Footer from "./components/footer/Footer";
import UFOsubforum from "./pages/UFOsubforum";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Navbar from "./components/navbar/Navbar"
import SinglePostReader from "./pages/SinglePostReader";

// test component pages
import Vincenttest from "./pages/testpages/Vincenttest";
import Joshtest from "./pages/testpages/Joshtest";
import Jackietest from "./pages/testpages/Jackietest";
import Dannytest from "./pages/testpages/Dannytest";
import Matttest from "./pages/testpages/Matttest";
import Lindseytest from "./pages/testpages/Lindseytest";

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />

          {/* testing routes only; remove on full deployment */}
          <Route path="/vincenttest" element={<Vincenttest />} />
          <Route path="/joshtest" element={<Joshtest />} />
          <Route path="/jackietest" element={<Jackietest />} />
          <Route path="/dannytest" element={<Dannytest />} />
          <Route path="/matttest" element={<Matttest />} />
          <Route path="/lindseytest" element={<Lindseytest />} />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
