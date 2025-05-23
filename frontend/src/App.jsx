import { Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container maxW="container.xl" p={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Vite + React + Chakra UI
        </Heading>
      </Container>
    </>
  );
}

export default App;
