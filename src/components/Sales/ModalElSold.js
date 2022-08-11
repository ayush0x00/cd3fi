import React from "react";
import { ethers } from "ethers";
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

const backendURL = "http://localhost:1234";

export default function ModalElSold(props) {
  const handleClick = async (e) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const sig = await signer.signMessage("HelloWorld");
      const id = props.bond;
      const contract = props.contract;
      const time =
        new Date(document.getElementById("days").value).getTime() / 1000;
      const price = document.getElementById("price").value;
      const tx = await contract.createSale(id, price, time);
      console.log(tx);
      try {
        const res = await fetch(`${backendURL}/resell/${props.bond}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ signature: sig }),
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      alert(e.data.message);
      return;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant={"ghost"}
        _hover={{ bg: "#81cdd4" }}
        className="text-sm bg-cyan-200 text-black w-16 rounded-xl  font-bold"
        onClick={onOpen}
        fontSize="13px"
        color="#1e0347"
        height="24px"
        width="200px"
      >
        {props.name}{" "}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,0.45)" />
        <ModalContent
          bg="#FFFFFF"
          w="450px"
          mx="auto"
          rounded="20px"
          height="500px"
          px="20px"
          pt="30px"
          mt="100px"
        >
          <ModalHeader> Resell NFB </ModalHeader>
          <ModalBody>
            {" "}
            {/* CAN ADD DATA THROUGH PROPS HERE FOR ALL THE PARAGRAPH ELEMENT */}{" "}
            <div className="flex flex-col ">
              <p className="font-bold mb-1"> Set Sale Price </p>{" "}
              <div className="relative">
                <input
                  type="text"
                  className=" w-full mb-3 border-2 border-teal-600 rounded-lg px-3 flex py-2"
                  placeholder="Set Sale"
                  id="price"
                />
                <label
                  for="price"
                  className="static-value absolute top-2 right-2"
                >
                  {" "}
                  CD3Fi{" "}
                </label>{" "}
              </div>{" "}
              <div className="flex justify-between pb-8">
                <p className="font-bold"> Last Sale Price: $2245 .67 </p>{" "}
                <p> $0 .00 </p>{" "}
              </div>{" "}
              <div className="flex justify-between pb-8">
                <p className="font-bold"> Rates </p>{" "}
                <div className="flex flex-col">
                  <p className="text-sm"> 1 BUSD = 6446377363 CD3Fi </p>{" "}
                  <p className="text-sm"> 1 CD3Fi = 0.00003537 BUSD </p>{" "}
                </div>{" "}
              </div>{" "}
              <p className="font-bold"> Days to sell </p>{" "}
              <input
                type="date"
                className=" mb-3 border-2 border-teal-600 rounded-lg px-3 flex py-2"
                placeholder="Enter number of days"
                id="days"
              />
            </div>{" "}
          </ModalBody>
          <ModalFooter>
            <div className="flex justify-between w-full">
              <Button
                width="200px"
                rounded="10px"
                fontWeight="bold"
                bg="#99EFFF"
                height="50px"
                onClick={handleClick}
              >
                {" "}
                Submit{" "}
              </Button>{" "}
              <Button
                variant="ghost"
                onClick={onClose}
                height="50px"
                width="200px"
                rounded="10px"
                fontWeight="bold"
                bg="#99EFFF"
              >
                Cancel{" "}
              </Button>{" "}
            </div>{" "}
          </ModalFooter>{" "}
        </ModalContent>{" "}
      </Modal>{" "}
    </>
  );
}
