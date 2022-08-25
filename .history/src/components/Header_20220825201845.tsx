import Image from 'next/image'
import path from 'path'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#63513d] h-28 w-full flex items-center'>
      <Image 
        src={logo} 
        alt='Logo image' 
        width={100} 
        height={100}
        style={{borderRadius: '100px', overflow: 'hidden', cursor}}
        
      />
    </div>
  )
}

export default Header