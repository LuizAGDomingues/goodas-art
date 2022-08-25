import Image from 'next/image'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#c9d7f8]'>
      <Image 
        src={logo} 
        alt='Logo image' 
        width={100} 
        height={100}
        className
      />

    </div>
  )
}

export default Header