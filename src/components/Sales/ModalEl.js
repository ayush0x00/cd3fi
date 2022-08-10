import React from "react";
import { ethers } from "ethers";
import cd3fiAbi from "../../CD3FiAbi.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import ModalBuy from "./ModalBuy";

export default function ModalEl(props) {
  const approve = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const acc = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const cd3FiContract = new ethers.Contract(
      "0x87C484f8c3c564e158A469bA209D8a89D176D82F",
      cd3fiAbi,
      signer
    );
    const price = await props.contract.nfbPriceInCd3Fi(props.bond);
    const tx = await cd3FiContract.approve(props.contract.address, price);
    console.log(tx);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="">
      <Button
        variant={"ghost"}
        _hover={{ bg: "#81cdd4" }}
        className="text-sm bg-cyan-200 text-black w-16 rounded-xl  font-bold"
        onClick={onOpen}
        fontSize="13px"
        color="#1e0347"
        height="24px"
      >
        {props.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay bg="rgba(0,0,0,0.45)" />
        <ModalContent
          bg="#FFFFFF"
          w="350px"
          mx="auto"
          rounded="20px"
          height="300px"
          px="20px"
          pt="30px"
          zIndex={10}
          mt="200px"
        >
          <ModalHeader>
            <p className="text-lg">Buy NFB</p>
          </ModalHeader>

          <ModalBody>
            {/*  */}
            {/* CAN ADD DATA THROUGH PROPS HERE FOR BAND PRICE AND TIME  */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="font-semibold">Bond</p>
                <p className="font-semibold">Price</p>
                <p className="font-semibold">Time</p>
              </div>
              <div className="flex flex-col items-end">
                {/* CAN ADD DATA THROUGH PROPS FOR ALL THE PARAGRAPH ELEMENT HERE */}
                <p>#{props.bond}</p>
                <p>${props.price}</p>
                <p>{props.time}</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-between w-full pt-6 pb-3">
              <Button
                variant="ghost"
                onClick={approve}
                height="50px"
                width="150px"
                rounded="10px"
                fontWeight="semibold"
                bg="#99EFFF"
              >
                Approve CD3Fi
              </Button>
              <ModalBuy contract={props.contract} bond={props.bond} />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
