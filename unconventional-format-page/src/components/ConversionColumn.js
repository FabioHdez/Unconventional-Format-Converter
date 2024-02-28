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

export const ConversionColumn = ({files,len}) => {
  const formatFileSize = (size) => {
    if (size < 1024) return size + ' bytes';
    let sizeInKB = size / 1024;
    if (sizeInKB < 1024) return sizeInKB.toFixed(2) + ' KB';
    let sizeInMB = sizeInKB / 1024;
    return sizeInMB.toFixed(2) + ' MB';
  };

  // Function to extract file extension
  const getFileExtension = (fileName) => {
    return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
  };
  return (
    <TableContainer maxW={"lg"}>
      <Table variant="striped" size={{ base: "sm", md: "md" }}>
        <TableCaption>
          Imported files will be converted into the selected format
        </TableCaption>
        <Thead>
          <Tr>
            <Th>File Name</Th>
            <Th>Format</Th>
            <Th>Size</Th>
          </Tr>
        </Thead>
        <Tbody>
          {files === null
            ? Array.from({ length: len }).map((_, index) => (
                <Tr key={index}>
                  <Td maxW={{ base: "200px", md: "280px" }} isTruncated>
                  &#8203;
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              ))
            : files &&
              Array.from(files).map((file, index) => (
                <Tr key={index}>
                  <Td maxW={{ base: "200px", md: "280px" }} isTruncated>
                    {file.name}
                  </Td>
                  <Td>.{getFileExtension(file.name)}</Td>
                  <Td>{formatFileSize(file.size)}</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
