import Image from 'next/image'
import React from 'react'
import logo from '../../public/Assets/imagens'

function Header() {
  return (
    <div className='bg-[#c9d7f8]'>
      <Image src='/logoPNG.png' alt='Logo image' width={100} height={100}/>

    </div>
  )
}

export default Header