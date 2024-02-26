import "./App.css";
import { Box, SimpleGrid, Container,Text,Button,Flex, Spacer, Divider, Center } from "@chakra-ui/react";
import { ConversionColumn } from "./components/ConversionColumn";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Container maxW={'80%'}>
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Divider my={2} />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Center>
      <Box>
          <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} mb={4}>Input</Text>
          <ConversionColumn />
          <Button width={'full'}>Import</Button>
        </Box>
        </Center>
        <Center>
        <Box>
        <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} mb={4}>Output</Text>
          <ConversionColumn />
          <Button width={'full'}>Convert</Button>
        </Box>
        </Center>
      </SimpleGrid>
      <Spacer />
      <Footer />
    </Flex>
    </Container>
  );
}

export default App;
