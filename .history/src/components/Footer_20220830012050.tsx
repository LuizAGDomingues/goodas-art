import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white font-Nunito font-light'>
        <div>
            <ul className='grid'>
                <Link href='/'>Artigos em couro</Link>
                <Link href='/'>Restauração de imagens</Link>
                <Link href='/'>Artesanatos</Link>
                <Link href='/'>Quem somos</Link>
                <Link href='/'>Fale conosco</Link>
            </ul>
        </div>
        <span></span>
    </div>
  )
}

export default Footer