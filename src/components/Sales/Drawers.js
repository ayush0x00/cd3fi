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
import { useState } from 'react'

export default function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [toggle1, settoggle1] = useState(false)
  const [toggle2, settoggle2] = useState(false)
  const [toggle3, settoggle3] = useState(false)
  const btnRef = React.useRef()
  return (
    <>
      <Button ref={btnRef} colorScheme='' onClick={onOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" /></svg>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'

      >
        <DrawerOverlay />
        <DrawerContent bg='#29213b'>
          <DrawerCloseButton ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg></DrawerCloseButton >


          <DrawerBody>
            <div className='flex flex-col space-y-5'>
              <p className='text-white pt-20 text-sm font-semibold hover:text-teal-400 cursor-pointer'>CD3FI</p>
              <p className='text-white text-sm font-semibold hover:text-teal-400 cursor-pointer'>CD3D</p>
              <p className='text-white text-sm font-semibold hover:text-teal-400 cursor-pointer'>EXCHANGE</p>
              <div className='text-white cursor-pointer' onClick={() => { settoggle1(!toggle1) }}>
                <div className='flex'>
                  <button className='text-sm font-semibold hover:text-teal-400'>WHITEPAPER</button>
                  {toggle1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="24" className='ml-1'><path fill="none" d="M0 0h24v24H0z" /><path d="M12 8l6 6H6z" fill="rgba(255,255,255,1)" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>}
                </div>
                {toggle1 ?
                  <div className='ml-4  '>
                    <p className='py-2 text-sm font-semibold hover:bg-[#160a33]'>Desk</p>
                  </div> : null}
              </div>
              <div className='text-white cursor-pointer text-sm font-semibold' onClick={() => { settoggle2(!toggle2) }}>
                <div className='flex items-center'>
                  <button className='hover:text-teal-400'> COMMUNITY</button>
                  {toggle2 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="24" className='ml-1'><path fill="none" d="M0 0h24v24H0z" /><path d="M12 8l6 6H6z" fill="rgba(255,255,255,1)" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>}
                </div>
                {toggle2 ?
                  <div className='ml-4  origin-top-right  right-0 flex flex-col '>
                    <p className='py-3 px-3  my-auto text-sm font-semibold hover:bg-[#160a33] '>TWITTER</p>
                    <p className=' py-3 px-3  text-sm font-semibold hover:bg-[#160a33]'>INSTAGRAM</p>
                    <p className='py-3 px-3  text-sm font-semibold hover:bg-[#160a33]'>YOUTUBE</p>
                    <p className='py-3 px-3  text-sm font-semibold hover:bg-[#160a33]'>MEDIUM</p>
                  </div> : null}
              </div>
              <div className='text-white cursor-pointer text-sm font-semibold' onClick={() => { settoggle3(!toggle3) }}>
                <div className='flex'>
                  <button className='hover:text-teal-400'>More</button>
                  {toggle3 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="24" className='ml-1'><path fill="none" d="M0 0h24v24H0z" /><path d="M12 8l6 6H6z" fill="rgba(255,255,255,1)" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>}
                </div>
                {toggle3 ?
                  <div className='flex flex-col ml-4 '>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>SIGN UP</p>
                      <p>Subscribe for updates</p>
                    </div>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>TEAM</p>
                      <p>This is who we are</p>
                    </div>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>CONTRACT</p>
                      <p>Code is low</p>
                    </div>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>AUDIT</p>
                      <p>Verified for safety</p>
                    </div>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>FAQ</p>
                      <p>Questions</p>
                    </div>
                    <div className='py-4 px-3 hover:bg-[#160a33] '>
                      <p>SPONSORSHIP</p>
                      <p>Be a Sponsor</p>
                    </div>
                  </div> : null}
              </div>
            </div>
          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </>
  )
}
