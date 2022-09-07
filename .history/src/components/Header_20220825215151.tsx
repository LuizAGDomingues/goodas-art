import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#63513d] h-28 w-full flex items-center justify-center'>
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
      <div className='flex items-center gap-4 mr-96'>
        <button>Login</button>
        <button>Produtos</button>
        <Link href='/'>Quem somos</Link>
        <Link href='/'>Fale conosco</Link>
      </div>
    </div>
  )
}

export default Header