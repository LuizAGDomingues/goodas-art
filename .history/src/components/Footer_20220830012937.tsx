import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white font-Nunito'>
        <div className='flex justify-between items-center'>
                <ul className='grid ml-60'>
                    <Link href='/' className='justify-center'>Artigos em couro</Link>
                    <Link href='/'>Restauração de imagens</Link>
                    <Link href='/'>Artesanatos</Link>
                    <Link href='/'>Quem somos</Link>
                    <Link href='/'>Fale conosco</Link>
                </ul>
            <div className='mr-60'>Informações de contato:</div>
        </div>
        <div className='flex items-center justify-center'>Todos os direitos reservados</div>
    </div>
  )
}

export default Footer