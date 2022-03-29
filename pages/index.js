import React from 'react'
import { Nav } from '../components/Nav/nav'
import { InfoPage } from '../components/Pages/infoPage'
import { PageHome } from '../components/Pages/pageHome'
import { Background } from '../components/Background'
import { AppContext } from '../contexts/app-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Logo } from '../components/logo'
import { useSize } from '../hooks/useSize'

export default function Home() {

  const [context] = React.useContext(AppContext);

  const target = React.useRef(null)
  const size = useSize(target)

  return (
    <>
      <main >
        <Background size={size} />

        <article className="popup_rot_dev">
          <h2>{"<!-- Horizontal mode is still being finalized, it is better to turn off the auto-rotate screen -->"}</h2>
        </article>
        
        <div ref={target} className="pages" style={{ pointerEvents: `${!context.interaction ? "fill" : "none"}` }}>
          <Logo />
          <Swiper>
            <SwiperSlide page={0} className="page__wrapper home_page">
              <PageHome />
            </SwiperSlide>
            <SwiperSlide page={1} className="page__wrapper">
              <InfoPage />
            </SwiperSlide >
          </Swiper>
        </div>

        <Nav />

      </main>
    </>
  )
}
