import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, IconButton, HStack,Text } from "@chakra-ui/react";
import { FaInfo, FaUserAlt } from "react-icons/fa";
export const Navbar = () => {
  return (
    <Box w="100%">
      <HStack justify={"center"}>
        <ColorModeSwitcher />
        <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} px={8}>
          Unconventional Format Converter
        </Text>
        <IconButton
          aria-label="Search database"
          icon={<FaInfo />}
          variant="ghost"
        />
        <IconButton aria-label="Profile" icon={<FaUserAlt />} variant="ghost" />
      </HStack>
    </Box>
  );
};
