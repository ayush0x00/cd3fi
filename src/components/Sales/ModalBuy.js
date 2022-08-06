import React from 'react'
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
} from '@chakra-ui/react'
import arrow from '../../static/images/Icon feather-arrow-up.png'

export default function ModalBuy() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button onClick={onOpen} bg="#99EFFF" height="50px" width="120px" rounded="10px" fontWeight="semibold" >Buy </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(0,0,0,0.7)" />
                <ModalContent bg="#FFFFFF"
                    w="450px"
                    mx="auto"
                    rounded="20px"
                    height="350px"
                    px="20px"
                    pt="30px"
                    zIndex={10}
                    mt="200px" >
                    <ModalCloseButton ml="auto" color="white" />
                    < ModalBody >
                        <div className='flex flex-col items-center'>
                            <img src={arrow} className='py-10'/>
                            <p className='font-semibold text-lg'>Submitting Transaction</p>
                            <p className='text-sm'>View on Binance</p>

                        </div>
                    </ModalBody>
                    < ModalFooter  >
                        <button className='mx-auto w-[300px] bg-[#99EFFF] font-semibold rounded-lg py-2 text-sm' onClick={onClose} >Close</button>
                    </ModalFooter >
                </ModalContent>
            </Modal>
        </div>
    )
}
