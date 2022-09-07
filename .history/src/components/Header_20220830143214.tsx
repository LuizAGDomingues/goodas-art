import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import logo from '../../public/Assets/imagens/logo/logoPNG.png'

function Header() {
  return (
    <div className='bg-[#63513d] h-28 w-full flex items-center justify-between text-white font-medium font-Nunito text-lg'>
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
      <div className='flex gap-10 mr-36'>
        <button className='mr-10'>Login</button>
        <Link href='/'><span className='flex-col items-center just'><BsFillHandbagFill />Artigos em couro</span></Link>
        <Link href='/'>Restauração de imagens</Link>
        <Link href='/' className='mr-10'>Artesanatos</Link>
        <Link href='/'>Quem somos</Link>
        <Link href='/'>Fale conosco</Link>
      </div>
    </div>
  )
}

export default Header