import React from "react";
import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"; // Importa NavLink

const Menu = () => {
  return (
    <Flex as="nav">
      {/* <NavLink to="/computadoras" label="Computadoras" /> */}
      <NavLink to="/MostPeriferico" activeClassName="active" exact>
        Periféricos
      </NavLink>
      <NavLink to="/FormComputadora" activeClassName="active" exact>
        Registrar Computadoras
      </NavLink>
      <NavLink to="/FormPeriferico" activeClassName="active" exact>
        Registrar Periféricos
      </NavLink>
    </Flex>
  );
};

export default Menu;
