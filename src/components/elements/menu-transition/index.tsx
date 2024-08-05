import React, { ReactNode } from 'react'
import { MenuItems, Transition } from '@headlessui/react'
interface MenuTransitionTypes {
  children: ReactNode
}
const MenuTransition: React.FC<MenuTransitionTypes> = ({ children }) => {
  return (
    <Transition
      enter="transition ease-in-out duration-500"
      enterFrom="opacity-0 scale-0 "
      enterTo="opacity-500 scale-100 "
      leave="transition ease-in-out duration-500"
      leaveFrom="opacity-100 duration-500 scale-100 "
      leaveTo=" opacity-0 scale-0"
    >
        <MenuItems className='transition-all ease-in-out duration-500'>
        {children}
        </MenuItems>
    </Transition>
  )
}

export default MenuTransition