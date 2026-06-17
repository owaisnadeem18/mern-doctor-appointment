import { logo } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-gra'  >
      <Image src={logo} className='' alt='logo' />
    </div>
  )
}

export default Header
