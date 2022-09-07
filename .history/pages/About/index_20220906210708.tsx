import Image from 'next/image'
import React from 'react'
import Footer from '../../src/components/Footer'
import Header from '../../src/components/Header'

import foto from '../../public/Assets/imagens/Foto_mae.jpg'

function About() {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center gap-10'>
        <Image src={foto} alt='Foto de Shirlei Gooda'/>
        <p className='font-Dancing font-bold text-2xl w-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Angelina</p>
      </div>
      <Footer />
    </>
  )
}

export default About