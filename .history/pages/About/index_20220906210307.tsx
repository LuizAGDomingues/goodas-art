import Image from 'next/image'
import React from 'react'
import Footer from '../../src/components/Footer'
import Header from '../../src/components/Header'

import foto from '../../public/Assets/imagens/Foto_mae.'

function About() {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center gap-10'>
        <Image />
      </div>
      <Footer />
    </>
  )
}

export default About