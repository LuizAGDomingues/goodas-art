import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#63513d] h-28 w-full flex items-center justify-between gap-96 text-white font-bold font-Nunito text-lg'>
      <Link href='/'>
        <a className='ml-36'>
          <Image 
            src={logo} 
            alt='Logo image' 
            width={100} 
            height={100}
            style={{borderRadius: '100px', cursor: 'pointer'}}
          />
        </a>
      </Link>
      form
      <div className='flex gap-10 mr-36'>
        <button className='mr-20'>Login</button>
        <button className='mr-20'>Produtos</button>
        <Link href='/'>Quem somos</Link>
        <Link href='/'>Fale conosco</Link>
      </div>
    </div>
  )
}

export default Header