import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Image from 'next/image'

import imagem2 from '../public/Assets/imagens/produtos/PortaJoia.jpeg'
import imagem3 from '../public/Assets/imagens/produtos/Relógio.jpeg'
import imagem4 from '../public/Assets/imagens/produtos/Vaquinha.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{clickable: false}}
        autoplay={{delay:3500}}
        effect='fade'
        style={{width: '1900px', height: '1000px'}}
      >
        <SwiperSlide>
          <Image
            src={imagem2}
            alt='Logo image'
            width={1800}
            height={900}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem3}
            alt='Logo image'
            width={1800}
            height={900}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem4}
            alt='Logo image'
            width={1800}
            height={900}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  )
}

export default Home
