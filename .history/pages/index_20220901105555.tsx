import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

import 'swiper/css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='h-96'>
        <Swiper>
          
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default Home
