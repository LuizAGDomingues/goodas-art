import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillHandbagFill, BsTelephoneFill, BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { RiLoginBoxLine } from 'react-icons/ri'
import { PaintBrush } from 'phosphor-react'
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
      <div className='flex items-center gap-10 mr-36'>
        <button className='flex items-center gap-1 mr-10'>Login<RiLoginBoxLine size={21}/></button>
        <Link href='/'><button className='flex items-center gap-1'>Artigos em couro<BsFillHandbagFill /></button></Link>
        <Link href='/'><button className='flex items-center gap-1'>Restauração de imagens <PaintBrush size={22} b/></button></Link>
        <Link href='/' className='mr-10'>Artesanatos</Link>
        <Link href='/'><button className='flex items-center gap-1'>Quem somos <BsFillFileEarmarkPersonFill /></button></Link>
        <Link href='/'><button className='flex items-center gap-1'>Fale conosco <BsTelephoneFill /></button></Link>
      </div>
    </div>
  )
}

export default Header