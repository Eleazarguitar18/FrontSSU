import React from "react";
import { Box } from "@chakra-ui/react"; // Importa los componentes de Chakra UI
import Menu from "./Menu";

const NavBar = () => {
  return (
    <Box as="header">
      <Menu />
    </Box>
  );
};

export default NavBar;
