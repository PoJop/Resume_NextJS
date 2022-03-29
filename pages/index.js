import React from 'react'
import useResizeObserver from '@react-hook/resize-observer'
import { DataContext } from '../contexts/data-context'
import { Nav } from '../components/Nav/nav'
import { PageInfo } from '../components/Pages/pageInfo'
import { PageHome } from '../components/Pages/pageHome'
import { Background } from '../components/Background'
import { useDoubleTap } from 'use-double-tap';
import { AppContext } from '../contexts/app-context'
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
    function getPageMaxScroll() {
      // Cross browser page height detection is ugly
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight; // Subtract viewport height
    }
    if (size === undefined) return
    let top = 1000000; // Value larger than maximum scroll
    const maxScroll = getPageMaxScroll();

    // Fix for bug on iOS devices
    // When top was larger than maximum page scroll
    // "getBoundingClientRect" would take that value into calculations
    if (top > maxScroll) {
      top = maxScroll;
    }

    target.current.addEventListener('scroll', function (e) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        let current = 0
        console.log(e)
        e.target.querySelectorAll('section').forEach(
          e => {
            let scrollTarget = e.getBoundingClientRect().x
            if (size.width / 2 >= scrollTarget) {
              current = e.getAttribute('page')
              console.log(current)
            }
          }
        )
        target.current.scrollTo({
          left: size.width * current,
          top: top,
          behavior: "smooth"
        })
        setCurrentPage(Number(current))
      }, 100);
    });
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
          <section page={0} className="page__wrapper home_page">
            <PageHome />
          </section>
          <section page={1} className="page__wrapper">
            <PageInfo />
          </section >
          {/* <section page={2} className="page__wrapper">2</section> */}
        </div>
        <Nav navRef={navRef} />
      </main>
    </>
  )
}
