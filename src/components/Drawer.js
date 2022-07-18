import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'

export default function Drawers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Ham
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          

          <DrawerBody>
            <p className='text-white'>Hi</p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
                <p className='text-white'> Cancel</p>
             
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
