import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

import imagem1 from '../public/Assets/imagens/produtos/Bolsas.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{clickable: true}}
        // autoplay={{delay:5000}}
      >
        <SwiperSlide>
          <Image
            src={imagem1}
            alt='Logo image' 
            style={{transform: 'rotate(90deg)', }}
          />
        </SwiperSlide>
        <SwiperSlide>Teste2</SwiperSlide>
        <SwiperSlide>Teste3</SwiperSlide>
        <SwiperSlide>Teste4</SwiperSlide>
      </Swiper>
      <Footer />
    </>
  )
}

export default Home
