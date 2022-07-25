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

export default function ModalEl(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="">
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

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay bg="rgba(0,0,0,0.45)" />
        <ModalContent
          bg="#d4fcf2"
          w="350px"
          mx="auto"
          rounded="20px"
          height="300px"
          px="20px"
          pt="30px"
          zIndex={10}
        >
          <ModalHeader>
            <p className="text-lg">Buy NFB</p>
          </ModalHeader>

          <ModalBody>
            {/*  */}
            {/* CAN ADD DATA THROUGH PROPS HERE FOR BAND PRICE AND TIME  */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="font-semibold">Band</p>
                <p className="font-semibold">Price</p>
                <p className="font-semibold">Time</p>
              </div>
              <div className="flex flex-col items-end">
                {/* CAN ADD DATA THROUGH PROPS FOR ALL THE PARAGRAPH ELEMENT HERE */}
                <p>#122</p>
                <p>$2345.66</p>
                <p>12:31 PM GMT, 5:26:22</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-between w-full pt-6 pb-3">
              <Button colorScheme="teal" mr={3}>
                Buy
              </Button>
              <Button variant="ghost" onClick={onClose} colorScheme="teal">
                Cancel
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
