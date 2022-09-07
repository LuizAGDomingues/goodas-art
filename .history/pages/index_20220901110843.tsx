import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay} from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

import 'swiper/css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='h-96'>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
        >
          <SwiperSlide>Teste1</SwiperSlide>
          <SwiperSlide>Teste2</SwiperSlide>
          <SwiperSlide>Teste3</SwiperSlide>
          <SwiperSlide>Teste4</SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default Home
