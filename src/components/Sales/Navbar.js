import React from 'react'
import '../../index.css'
import logo from '../../Media/logo.png'
import { Link } from 'react-router-dom'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import Drawers from "./Drawers";


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <div className='flex px-6 py-3 text-white  items-center justify-between bg-[#1d1236] text-sm font-semibold'>
        {/* First */}
        <div>
          <Link to='/'><img src={logo} /></Link>

        </div>

        {/* second */}
        <div className='flex items-center space-x-20 justify-between 2xl:space-x-16 xl:space-x-7 lg:hidden '>
          <div className='flex '>
            <a href='https://cd3fi.com/' target='_blank'> <p className='hover:text-teal-400 cursor-pointer'>CD3FI</p></a>
          </div>
          <div className='flex '>
            <a href='https://cd3d.app/' target='_blank'><p className='hover:text-teal-400 cursor-pointer'>CD3D</p></a>
          </div>
          <div className='flex ]'>
            <p className='hover:text-teal-400 cursor-pointer'>EXCHANGE</p>
          </div>
          <Menu autoSelect={false}>
            <MenuButton>
              <div className='flex '>
                <p className='hover:text-teal-400 cursor-pointer'>WHITEPAPER</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>
              </div>
            </MenuButton>

            <MenuList bg='#99F6FF' border='#29213b'  rounded='5px'>

              <p className='font-semibold text-blue-900 py-1 w-[100px]'><MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>Deck</MenuItem></p>

            </MenuList>
          </Menu>
          <Menu autoSelect={false}>
            <MenuButton>
              <div className='flex  '>
                <p className='hover:text-teal-400 cursor-pointer '>COMMUNITY</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>
              </div>
            </MenuButton>

            <MenuList bg='#99F6FF' border='#29213b' rounded='5px'  >
              <p className='font-semibold text-blue-900  py-1 w-[160px]'><MenuItem h='30px' pl='20px' _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} >TWITTER</MenuItem></p>
              <p className='font-semibold text-blue-900  py-1 w-[160px]'> <MenuItem h='30px' pl='20px' _hover={{ bg: '#29213b', textColor: '#fcfcfc' }}>INSTAGRAM</MenuItem></p>
              <p className='font-semibold text-blue-900  py-1 w-[160px]'> <MenuItem h='30px' pl='20px' _hover={{ bg: '#29213b', textColor: '#fcfcfc' }}>YOUTUBE</MenuItem></p>
              <p className='font-semibold text-blue-900  py-1 w-[160px]'> <MenuItem h='30px' pl='20px' _hover={{ bg: '#29213b', textColor: '#fcfcfc' }}>MEDIUM</MenuItem></p>
            </MenuList>
          </Menu>
          <Menu autoSelect={false} >
            <MenuButton>
              <div className='flex '>
                <p className='hover:text-teal-400 cursor-pointer '>MORE</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14l-4-4h8z" fill="rgba(255,255,255,1)" /></svg>
              </div>
            </MenuButton>
            <MenuList bg='#99F6FF' border='#29213b' rounded='5px' >

              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px]  pt-1'>
                  <p className='font-bold hover:text-white w-full'>SIGN UP</p>
                  <p className='text-sm'>Subscribe for updates</p>
                </div>
              </MenuItem>

              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px] pt-1'>
                  <p className='font-bold'>TEAM</p>
                  <p className='text-sm'>This is who we are</p>
                </div>
              </MenuItem>
              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px] pt-1'>
                  <p className='font-bold'>CONTRACT</p>
                  <p className='text-sm'>Code is law</p>
                </div>
              </MenuItem>
              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px] pt-1'>
                  <p className='font-bold'>AUDIT</p>
                  <p className='text-sm'>Verified for safety</p>
                </div>
              </MenuItem>
              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px] pt-1'>
                  <p className='font-bold'>FAQ</p>
                  <p className='text-sm'>Questions</p>
                </div>
              </MenuItem>
              <MenuItem _hover={{ bg: '#29213b', textColor: '#fcfcfc' }} pl='20px'>
                <div className='flex flex-col  text-blue-900 hover:text-white w-[220px] pt-1'>
                  <p className='font-bold'>SPONSORSHIP</p>
                  <p className='text-sm'>Be a Sponsor</p>
                </div>
              </MenuItem>

            </MenuList>
          </Menu>
        </div>

        {/* Third */}
        <div className=' flex items-center space-x-2'>
          <Link to='/buy'>  <button className=' px-4 py-2 rounded-lg hover:bg-teal-500 bg-teal-200 text-blue-900'>BUY</button></Link>
          <button className=' px-4 py-2 rounded-lg hover:bg-teal-500 bg-teal-200 text-blue-900'>CONNECT</button>
          {/* HamMenu */}
          <div className=' hidden lg:block'>
            <Drawers />
          </div>
        </div>
      </div>
    </div>
  )
}
