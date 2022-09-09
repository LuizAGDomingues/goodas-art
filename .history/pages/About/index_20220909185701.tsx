import React, {useEffect, useRef } from 'react'
import Footer from '../../src/components/Footer'
import Header from '../../src/components/Header'

import foto_mae from '../../public/Assets/imagens/foto-mae.jpg'
import Image from 'next/image'


function About() {

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current === null){
      console.log('')
    }
  }, []);

  return (
    <>
      <Header />
      <div className='flex items-center justify-between my-3 mx-20'>
        <Image src={foto_mae} alt='foto de Shirlei Gooda' height={810} style={{borderRadius: '200px'}}/>
        <p ref={ref} className='font-Dancing font-bold text-2xl w-[22rem] mr-[20rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Angelina</p>
      </div>
      <Footer />
    </>
  )
}

export default About