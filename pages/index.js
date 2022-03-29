import React from 'react'
import useResizeObserver from '@react-hook/resize-observer'
import { DataContext } from '../contexts/data-context'
import { Nav } from '../components/Nav/nav'
import { PageInfo } from '../components/Pages/pageInfo'
import { PageHome } from '../components/Pages/pageHome'
import { Background } from '../components/Background'
import { AppContext } from '../contexts/app-context';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const useSize = (target) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

export default function Home() {
  const [context, setContext] = React.useContext(AppContext);
  const [currentPage, setCurrentPage] = React.useState(1)
  const target = React.useRef(null)
  const size = useSize(target)
  const navRef = React.useRef(null)
  const mainRef = React.useRef(null)

  React.useEffect(() => {
    let timer = null;
    if (size === undefined) return
    // target.current.addEventListener('scroll', function (e) {
    //   clearTimeout(timer);
    //   timer = setTimeout(function () {
    //     let current = 0
    //     e.target.querySelectorAll('section').forEach(
    //       e => {
    //         let scrollTarget = e.getBoundingClientRect().x
    //         if (size.width / 2 >= scrollTarget) {
    //           current = e.getAttribute('page')
    //         }
    //       }
    //     )
    //     target.current.scrollTo({
    //       left: size.width * current,
    //       top: 0,
    //       behavior: "smooth"
    //     })
    //     setCurrentPage(Number(current))
    //   }, 100);
    // });
  }, [size])
  return (
    <>
      <main ref={mainRef}>
        {/* {...bind} */}
        <Background size={size} navRef={navRef} />
        <article className="popup_rot_dev">
          <h2>{"<!-- Horizontal mode is still being finalized, it is better to turn off the auto-rotate screen -->"}</h2>
        </article>
        <div ref={target} className="pages" style={{ pointerEvents: `${!context.interaction ? "fill" : "none"}` }}>
          <Swiper>
            <SwiperSlide page={0} className="page__wrapper home_page">
              <PageHome />
            </SwiperSlide>
            <SwiperSlide page={1} className="page__wrapper">
              <PageInfo />
            </SwiperSlide >
            {/* <section page={2} className="page__wrapper">2</section> */}
          </Swiper>
        </div>
        <Nav navRef={navRef} />
      </main>
    </>
  )
}
