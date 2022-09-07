import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#63513d] h-28 w-full flex items-center justify-between'>
      <Link href='/'>
        <a className='ml-5'>
          <Image 
            src={logo} 
            alt='Logo image' 
            width={100} 
            height={100}
            style={{borderRadius: '100px', cursor: 'pointer'}}
          />
        </a>
      </Link>
      <button>Login</button>
      <Link></Link>
    </div>
  )
}

export default Header