import Image from 'next/image'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#523e27] h'>
      <Image 
        src={logo} 
        alt='Logo image' 
        width={100} 
        height={100}
        style={{borderRadius: '100px', overflow: 'hidden'}}
      />
    </div>
  )
}

export default Header