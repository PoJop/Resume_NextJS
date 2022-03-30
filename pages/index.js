import React from 'react'
import { Nav } from '../components/Nav/nav'
import { InfoPage } from '../components/Pages/infoPage'
import { PageHome } from '../components/Pages/pageHome'
import { Background } from '../components/Background'
import { AppContext } from '../contexts/app-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Logo } from '../components/logo'
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
  const [size, setSize] = React.useState()
  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

export default function Home() {
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0
  })


  React.useEffect(() => {
    const setSize = () => {
      setWindowSize({
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", () => {
      setSize()
    }, false);
    setSize()
  }, [])
  return (
    <>


      {windowSize.width < 768 ? (
        <Mobile windowSize={windowSize} />
      ) : (
        <>
          <main className="main_desktop">

            <article className="article__mobile">
              <Mobile windowSize={360} />
            </article>
          </main>
        </>
      )}
    </>
  )
}

const Mobile = ({ windowSize }) => {

  const [context] = React.useContext(AppContext);
  const [fullScreenPhoto, setFullScreenPhoto] = React.useState(false)

  const target = React.useRef(null)
  const size = useSize(target)
  console.log(size)
  return (
    <>
      <main >
        <Background size={size}/>

        {/* <article className="popup_rot_dev">
          <h2>{"<!-- Horizontal mode is still being finalized, it is better to turn off the auto-rotate screen -->"}</h2>
        </article> */}

        <div ref={target} className="pages" style={{ pointerEvents: `${!context.interaction ? "fill" : "none"}`}} >
          <Logo />
          <Swiper>
            <SwiperSlide page={0} className="page__wrapper home_page">
              <PageHome />
            </SwiperSlide>
            <SwiperSlide page={1} className="page__wrapper">
              <InfoPage setFullScreenPhoto={setFullScreenPhoto} />
            </SwiperSlide >
          </Swiper>
        </div>
        <article className={`full_screen_photo ${fullScreenPhoto ? "open" : ""}`} onClick={() => setFullScreenPhoto(false)}>
          <div>
            <img src="./photo.jpg" />
          </div>
        </article>
        <Nav windowSize={windowSize} />

      </main>
    </>
  )
}