import React from "react";
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

export default function ModalElSold(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant={"ghost"}
        _hover={{ bg: "#81cdd4" }}
        className="text-sm bg-teal-200 text-blue-900 w-16 rounded-xl  font-bold"
        onClick={onOpen}
        fontSize="13px"
        color="#1e0347"
        height="24px"
      >
        {props.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="#d4fcf2"
          w="450px"
          mx="auto"
          rounded="20px"
          height="500px"
          px="20px"
          pt="30px"
        >
          <ModalHeader>Resell NFB</ModalHeader>

          <ModalBody>
            {/* CAN ADD DATA THROUGH PROPS HERE FOR ALL THE PARAGRAPH ELEMENT */}
            <div className="flex flex-col ">
              <p className="font-bold mb-1">Set Sale Price</p>
              <input
                className=" mb-3 border-2 border-teal-600 rounded-lg px-3 flex py-2"
                placeholder="Set Sale"
              />
              <div className="flex justify-between pb-8">
                <p className="font-bold">Last Sale Price : $2245.67</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between pb-8">
                <p className="font-bold">Routes</p>
                <div className="flex flex-col">
                  <p className="text-sm">1 BUSD = 6446377363 CD3Fi</p>
                  <p className="text-sm">1 CD#Fi = 0.00003537 BUSD</p>
                </div>
              </div>
              <p className="font-bold">Days to sell</p>
              <input
                className=" mb-3 border-2 border-teal-600 rounded-lg px-3 flex py-2"
                placeholder="Enter number of days"
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-between w-full">
              <Button colorScheme="teal" mr={3}>
                {" "}
                Submit{" "}
              </Button>
              <Button variant="ghost" onClick={onClose} colorScheme="teal">
                Cancel
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
