import React from "react";
import logo from "../static/images/logo.png";
import '../index.css'
import { Button } from "bootstrap";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import Drawers from "./Drawer";
import Navbar from "./Sales/Navbar";


const Header = () => {
  return(
    <Navbar />
  )
};
export default Header;
