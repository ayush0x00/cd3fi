import React from "react";
import "../../index.css";
import logo from "../../Media/logo.png";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import Drawers from "./Drawers";

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <div className="flex px-6 py-3 text-white  items-center justify-between bg-[#1d1236] text-sm font-semibold">
        {/* First */}
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        {/* second */}
        <div className="flex items-center space-x-20 justify-between 2xl:space-x-16 xl:space-x-7 lg:hidden ">
          <div className="flex ">
            <a
              href="https://cd3fi.com/"
              target="_blank"
              style={{ color: "#FFFFFF", "text-decoration": "none" }}
            >
              {" "}
              <p className="hover:text-cyan-200 cursor-pointer">CD3FI</p>
            </a>
          </div>
          <div className="flex ">
            <a
              href="https://cd3d.app/"
              target="_blank"
              style={{ color: "#FFFFFF", "text-decoration": "none" }}
            >
              <p className="hover:text-cyan-200 cursor-pointer">CD3D</p>
            </a>
          </div>
          <div className="flex ]">
            <p className="hover:text-cyan-200 cursor-pointer">EXCHANGE</p>
          </div>
          <Menu autoSelect={false}>
            <MenuButton>
              <div className="flex ">
                <p className="hover:text-cyan-200 cursor-pointer bg-[#1d172e]">
                  WHITEPAPER
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" />
                </svg>
              </div>
            </MenuButton>

            <MenuList bg="#1d172e" border="#29213b" rounded="5px">
              <p className="font-semibold text-white py-1 w-[100px]">
                <MenuItem _hover={{ textColor: "#99F6FF" }} pl="20px">
                  Deck
                </MenuItem>
              </p>
            </MenuList>
          </Menu>
          <Menu autoSelect={false}>
            <MenuButton>
              <div className="flex  ">
                <p className="hover:text-cyan-200 cursor-pointer ">COMMUNITY</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" />
                </svg>
              </div>
            </MenuButton>

            <MenuList bg="#1d172e" border="#29213b" rounded="5px">
              <p className="font-semibold text-white py-1 w-[160px]">
                {" "}
                <MenuItem h="30px" pl="20px" _hover={{ textColor: "#99F6FF" }}>
                  TWITTER
                </MenuItem>
              </p>
              <p className="font-semibold text-white py-1 w-[160px]">
                {" "}
                <MenuItem h="30px" pl="20px" _hover={{ textColor: "#99F6FF" }}>
                  INSTAGRAM
                </MenuItem>
              </p>
              <p className="font-semibold text-white py-1 w-[160px]">
                {" "}
                <MenuItem h="30px" pl="20px" _hover={{ textColor: "#99F6FF" }}>
                  YOUTUBE
                </MenuItem>
              </p>
              <p className="font-semibold text-white py-1 w-[160px]">
                {" "}
                <MenuItem h="30px" pl="20px" _hover={{ textColor: "#99F6FF" }}>
                  MEDIUM
                </MenuItem>
              </p>
            </MenuList>
          </Menu>
          <Menu autoSelect={false}>
            <MenuButton>
              <div className="flex ">
                <p className="hover:text-cyan-200 cursor-pointer ">MORE</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" />
                </svg>
              </div>
            </MenuButton>
            <MenuList bg="#99F6FF" border="#29213b" rounded="5px">
              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px]  pt-1">
                  <p className="font-bold hover:text-[#99F6FF] w-full">
                    SIGN UP
                  </p>
                  <p className="text-sm  hover:text-[#99F6FF]">
                    Subscribe for updates
                  </p>
                </div>
              </MenuItem>

              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px] pt-1">
                  <p className="font-bold hover:text-[#99F6FF]">TEAM</p>
                  <p className="text-sm hover:text-[#99F6FF]">
                    This is who we are
                  </p>
                </div>
              </MenuItem>
              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px] pt-1">
                  <p className="font-bold hover:text-[#99F6FF]">CONTRACT</p>
                  <p className="text-sm hover:text-[#99F6FF]">Code is low</p>
                </div>
              </MenuItem>
              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px] pt-1">
                  <p className="font-bold hover:text-[#99F6FF]">AUDIT</p>
                  <p className="text-sm hover:text-[#99F6FF]">
                    Verified for safety
                  </p>
                </div>
              </MenuItem>
              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px] pt-1">
                  <p className="font-bold hover:text-[#99F6FF]">FAQ</p>
                  <p className="text-sm hover:text-[#99F6FF]">Questions</p>
                </div>
              </MenuItem>
              <MenuItem
                _hover={{ textColor: "#99F6FF" }}
                pl="20px"
                bg="#1d172e"
              >
                <div className="flex flex-col  text-white hover:text-[#99F6FF] w-[220px] pt-1">
                  <p className="font-bold hover:text-[#99F6FF]">SPONSORSHIP</p>
                  <p className="text-sm hover:text-[#99F6FF]">Be a Sponsor</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* Third */}
        <div className=" flex items-center space-x-2">
          <Link to="/buy">
            {" "}
            <button className=" px-4 py-2 rounded-lg hover:bg-cyan-400 bg-cyan-200 text-black">
              BUY
            </button>
          </Link>
          <button
            className=" px-4 py-2 rounded-lg hover:bg-cyan-400 bg-cyan-200 text-black"
            onClick={props.connectMetamask}
          >
            {props.account ? props.account : "CONNECT"}
          </button>
          {/* HamMenu */}
          <div className=" hidden lg:block">
            <Drawers />
          </div>
        </div>
      </div>
    </div>
  );
}
