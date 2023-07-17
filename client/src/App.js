const client = new ApolloClient({
  // Set up our client to execute the authLink middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter >
        <Routes >

        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;