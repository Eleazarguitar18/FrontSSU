import React from "react";
import { Box } from "@chakra-ui/react"; // Importa los componentes de Chakra UI
import Header from "./Header";

const NavBar = () => {
  return (
    <Box as="header">
      <Header />
    </Box>
  );
};

export default NavBar;
