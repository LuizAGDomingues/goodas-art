import React, {useEffect} from 'react'
import Footer from '../../src/components/Footer'
import Header from '../../src/components/Header'

import foto_mae from '../../public/Assets/imagens/foto-mae.jpg'
import Image from 'next/image'


function About() {

  useEffect(() => {
    var i = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text")!.innerHTML;
    var attr = tag!.setAttribute("data", html);
    var txt = tag!.getAttribute("data");
    var speed = 90;

    function typeWriter() {
      if (i <= txt!.length) {
        document.getElementById("text")!.innerHTML = txt!.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }, []);

  return (
    <>
      <Header />
      <div className='flex items-center justify-between my-3 mx-20'>
        <Image src={foto_mae} alt='foto de Shirlei Gooda' height={810} style={{borderRadius: '200px'}}/>
        <p id='text' className='font-Dancing font-bold text-2xl w-[22rem] mr-[20rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non risus et est vestibulum pulvinar non et nibh. Maecenas tincidunt faucibus est, in euismod dui fermentum in. In tristique suscipit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor tincidunt tempus. POR: Angelina</p>
      </div>
      <Footer />
    </>
  )
}

export default About