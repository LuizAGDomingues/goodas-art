import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white font-Nunito'>
        <div className='flex justify-center item'>
            <div>
                <ul className='grid'>
                    <Link href='/'>Artigos em couro</Link>
                    <Link href='/'>Restauração de imagens</Link>
                    <Link href='/'>Artesanatos</Link>
                    <Link href='/'>Quem somos</Link>
                    <Link href='/'>Fale conosco</Link>
                </ul>
            </div>
            <div>Informações de contato: </div>
        </div>
        <span>Todos os direitos reservados</span>
    </div>
  )
}

export default Footer