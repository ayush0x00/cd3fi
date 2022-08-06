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
import certificate from '../../static/images/Cartificate-Dark.png'


export default function ModalImg(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
    <>
            <Button onClick={onOpen} >   <img src={props.img} className="pt-6 pb-2" /> </Button>

                < Modal isOpen={isOpen}
                    onClose={onClose} >
                    <ModalOverlay bg="rgba(0,0,0,0.7)" />
                    <ModalContent w='800px' mx='auto' my='auto' >
                        <ModalCloseButton ml="auto" color="white" />
                        < ModalBody >
                            <img src={props.img} className='w-[950px]' />
                        </ModalBody>

                        <  ModalFooter >
                            <Button colorScheme='blue' mr={3} onClick={onClose} >< /Button>
                                <Button variant='ghost' > < /Button>
                                </ModalFooter >
                            </ModalContent>
                 </ Modal >
                        < />
                        )
}
