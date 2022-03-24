import React from 'react'
import useResizeObserver from '@react-hook/resize-observer'
import { DataContext } from '../contexts/data-context'
import { Nav } from '../components/nav'
import { PageInfo } from '../components/Pages/pageInfo'
import { PageHome } from '../components/Pages/pageHome'
import { Background } from '../components/Background'
import { useDoubleTap } from 'use-double-tap';
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
  const [currentPage, setCurrentPage] = React.useState(1)
  const { language, toggleLanguage } = React.useContext(DataContext)
  const target = React.useRef(null)
  const size = useSize(target)
  const navRef = React.useRef(null)
  const [gravity, setGravity] = React.useState(false)
  const mainRef = React.useRef(null)
  const bind = useDoubleTap((event) => {
    setGravity(!gravity);
  });


  React.useEffect(() => {
    console.log(gravity)
  }, [gravity])
  // target.current.addEventListener("touchstart", handleStart, false);
  // React.useEffect(() => {
  //   if (target && target.current) {
  //     target.current.addEventListener("touchend", handleEnd, false);
  //   }
  // }, [target])
  // const handleEnd = (e) => {
  //   e.preventDefault();
  // }
  React.useEffect(() => {
    let timer = null;

    if (size === undefined) return

    target.current.addEventListener('scroll', function (e) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        let current = 0
        e.target.querySelectorAll('section').forEach(
          e => {
            console.log(e.getBoundingClientRect().x)
            if (size.width / 2 >= e.getBoundingClientRect().x) {
              current = e.getAttribute('page')
            }
          }
        )
        target.current.scrollTo({ left: size.width * current, behavior: "smooth" })
        setCurrentPage(current)
      }, 100);
    });
  }, [size])

  return (
    <>
      <main ref={mainRef} {...bind}>
        <Background size={size} navRef={navRef} />
        <div ref={target} className="pages" style={{ pointerEvents: `${gravity ? "fill" : "none"}` }}>
          <section page={0} className="page__wrapper">
            <PageHome />
          </section>
          <section page={1} className="page__wrapper">
            <PageInfo />
          </section >
          <section page={2} className="page__wrapper">2</section>
        </div>
        <Nav navRef={navRef} />
      </main>
    </>
  )
}
