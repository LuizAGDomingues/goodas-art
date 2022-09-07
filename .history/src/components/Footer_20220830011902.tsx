import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
        <div>
            <ul>
            <Link href='/'>Artigos em couro</Link>
        <Link href='/'>Restauração de imagens</Link>
        <Link href='/' className='mr-10'>Artesanatos</Link>
        <Link href='/'>Quem somos</Link>
        <Link href='/'>Fale conosco</Link>
            </ul>
        </div>
        <span></span>
    </div>
  )
}

export default Footer