import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Image from 'next/image'

import imagem1 from '../public/Assets/imagens/produtos/'
import imagem2 from '../public/Assets/imagens/produtos/PortaJoia.jpeg'
import imagem3 from '../public/Assets/imagens/produtos/Relógio.jpeg'
import imagem4 from '../public/Assets/imagens/produtos/Vaquinha.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{clickable: true}}
        // autoplay={{delay:5000}}
        style={{width: '100vw', height: '600px'}}
      >
        <SwiperSlide>
          <Image
            src={imagem1}
            alt='Logo image'
            width={1600}
            height={600}
            objectFit='fill'
            loading='lazy'
            style={{marginLeft: '20px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem2}
            alt='Logo image'
            width={1600}
            height={600}
            objectFit='fill'
            loading='lazy'
            style={{marginLeft: '250px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem3}
            alt='Logo image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem4}
            alt='Logo image' 
          />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  )
}

export default Home
