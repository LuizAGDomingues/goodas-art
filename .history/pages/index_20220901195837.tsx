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
        style={{height: '835px'}}
      >
        <SwiperSlide>
          <Image
            src={imagem2}
            alt='Logo image'
            width={1865}
            height={835}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem3}
            alt='Logo image'
            width={1865}
            height={835}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagem4}
            alt='Logo image'
            width={1865}
            height={835}
            objectFit='fill'
            style={{borderRadius: '10px'}}
          />
        </SwiperSlide>
      </Swiper>
      <div className='mt-20 flex items-center justify-center gap-96'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. In eget nulla sed eros luctus blandit. Morbi quis ex ac ex rhoncus bibendum a sit amet urna. Nullam venenatis vehicula mauris. Vivamus non interdum ligula, sed lobortis neque. Integer imperdiet magna justo, et ullamcorper odio egestas ut. Pellentesque neque lacus, consectetur fringilla condimentum ac, convallis id dui.</p>
        <p>COMENTARIO 2</p>
        <p>COMENTARIO 3</p>
      </div>
      <Footer />
    </>
  )
}

export default Home
