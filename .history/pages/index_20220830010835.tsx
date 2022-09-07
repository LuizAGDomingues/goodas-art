import type { NextPage } from 'next'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='w-auto h-screen'>HOME</div>
      <Footer />
    </>
  )
}

export default Home
