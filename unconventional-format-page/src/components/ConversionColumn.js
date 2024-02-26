import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";

export const ConversionColumn = () => {
  return (
    <TableContainer maxW={"lg"}>
      <Table variant="striped" size={{ base: "sm", md: "md" }}>
        <TableCaption>Imported files will be converted into the selected format</TableCaption>
        <Thead>
          <Tr>
            <Th>File Name</Th>
            <Th>Format</Th>
            <Th>Size</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Toto - Africa (Official HD Video)</Td>
            <Td>.mp4</Td>
            <Td>5 MB</Td>
          </Tr>
          <Tr>
            <Td>The Verve - Bitter Sweet Symphony</Td>
            <Td>.mkv</Td>
            <Td>9 MB</Td>
          </Tr>
          <Tr>
            <Td>Radiohead - Creep</Td>
            <Td>.avi</Td>
            <Td>3 MB</Td>
          </Tr>
          <Tr>
            <Td>Nirvana - Smells Like Teen Spirit</Td>
            <Td>.mp4</Td>
            <Td>6 MB</Td>
          </Tr>
          <Tr>
            <Td>Earth, Wind & Fire - September</Td>
            <Td>.flv</Td>
            <Td>9 MB</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
