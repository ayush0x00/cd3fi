import React, { useState } from "react";
import { ethers } from "ethers";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import arrow from "../../static/images/Icon feather-arrow-up.png";
const backendURL = "http://localhost:1234";

export default function ModalBuy(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mod, setmod] = useState(true);

  const handleBuy = async () => {
    onOpen();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const acc = await provider.send("eth_requestAccounts", []);
    const contract = props.contract;
    const from = await contract.ownerOf(props.bond);
    const tx = await contract.buyNFB(from, acc[0], props.bond);
    console.log(tx);
    const res = await fetch(`${backendURL}/sell/${props.bond}`);
    console.log(res);
  };

  return (
    <div>
      <Button
        onClick={handleBuy}
        bg="#99EFFF"
        height="50px"
        width="120px"
        rounded="10px"
        fontWeight="semibold"
      >
        {" "}
        Buy{" "}
      </Button>{" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,0.7)" />
        <ModalContent
          bg="#FFFFFF"
          w="450px"
          mx="auto"
          rounded="20px"
          height="350px"
          px="20px"
          pt="30px"
          zIndex={10}
          mt="200px"
        >
          <ModalCloseButton ml="auto" color="white" />
          <ModalBody>
            <div className="absolute -top-48 left-[30%]">
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                bg="red"
              >
                <AlertIcon boxSize="40px" mr={0} />{" "}
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Application submitted!
                </AlertTitle>{" "}
                <AlertDescription maxWidth="sm">
                  <div className="space-x-6">
                    <button
                      className="bg-white text-black w-20 rounded"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      {" "}
                      No{" "}
                    </button>{" "}
                    <button
                      className="bg-white text-black w-20 rounded"
                      onClick={() => {
                        setmod(false);
                      }}
                    >
                      {" "}
                      yes{" "}
                    </button>{" "}
                  </div>{" "}
                </AlertDescription>
              </Alert>
            </div>{" "}
            {mod && (
              <div className="flex flex-col items-center">
                <img src={arrow} className="py-10" />
                <p className="font-semibold text-lg">
                  {" "}
                  Submitting Transaction{" "}
                </p>{" "}
                <p className="text-sm"> View on Binance </p>
              </div>
            )}{" "}
            {!mod && (
              <div className="flex flex-col items-center">
                <img src={arrow} className="py-10" />
                <p className="font-semibold text-lg">
                  {" "}
                  Transaction Submitted{" "}
                </p>{" "}
                <p className="text-sm"> View on Binance </p>
              </div>
            )}{" "}
          </ModalBody>
          <ModalFooter>
            <button
              className="mx-auto w-[300px] bg-[#99EFFF] font-semibold rounded-lg py-2 text-sm"
              onClick={() => {
                onClose();
                setmod(true);
              }}
            >
              {" "}
              Close{" "}
            </button>{" "}
          </ModalFooter>{" "}
        </ModalContent>{" "}
      </Modal>
    </div>
  );
}
