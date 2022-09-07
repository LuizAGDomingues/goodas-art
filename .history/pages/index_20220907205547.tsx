import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Image from 'next/image'

import imagem2 from '../public/Assets/imagens/produtos/PortaJoia.jpeg'
import imagem3 from '../public/Assets/imagens/produtos/Relógio.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';

const Home: NextPage = () => {

  const [render, setRender] = useState(false);

  useEffect(() => {
    function scrollPosition(){
      if(window.scrollY > 100){
        setRender(true);
      }
    }
    window.addEventListener('scroll', scrollPosition);
  }, []);

  return (
    <>
      <Header />
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{clickable: false}}
        autoplay={{delay:3500}}
        effect='fade'
        style={{height: '835px'}}
      >
        <SwiperSlide>
          <div className='flex justify-between'>
            <Image
              src={imagem2}
              alt='Logo image'
              width={935}
              height={830}
              objectFit='fill'
              style={{borderRadius: '10px'}}
            />
            <Image
              src={imagem3}
              alt='Logo image'
              width={935}
              height={830}
              objectFit='fill'
              style={{borderRadius: '10px'}}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-between'>
            <Image
              src={imagem3}
              alt='Logo image'
              width={935}
              height={830}
              objectFit='fill'
              style={{borderRadius: '10px'}}
            />
            <Image
              src={imagem2}
              alt='Logo image'
              width={935}
              height={830}
              objectFit='fill'
              style={{borderRadius: '10px'}}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      { render ? 
        <div className='m-32 flex items-center justify-center gap-52 font-Dancing font-bold text-2xl'>
          <p className='animate-fade_secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Angelina</p>
          <p className='animate-fade_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Cláudia</p>
          <p className='animate-fade_secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Janete</p>
        </div>
        : <span>loading</span>
      }
      <Footer />
    </>
  )
}

export default Home
