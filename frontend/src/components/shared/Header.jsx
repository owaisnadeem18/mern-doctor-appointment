import { logo } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-gra'  >
      <Image src={logo} className='' />
    </div>
  )
}

export default Header
