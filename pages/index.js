import React from 'react'
import useResizeObserver from '@react-hook/resize-observer'
import { DataContext } from '../contexts/data-context'
import { Nav } from '../components/nav'
import { PageInfo } from '../components/Pages/pageInfo'
import { PageHome } from '../components/Pages/pageHome'
import Matter from 'matter-js'
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

  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Events,
    Composites,
    Composite,
    Constraint,
    Body
  } = Matter;

  let engine = Engine.create();
  React.useEffect(() => {
    let render = Render.create({
      element: document.querySelector("#__next"),
      engine: engine,

      options: { wireframes: false }
    });

    let boxA = Bodies.rectangle(400, 200, 80, 80);
    let boxB = Bodies.rectangle(450, 50, 80, 80);
    let block = Bodies.rectangle(450, 50, 35, 35, {
      render: {
        strokeStyle: "#fff",
        sprite: {
          texture: '/ReactIco.png',
          xScale: 1,
          yScale: 1
        }
      }
    }
    );
    console.log(block)
    let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    Composite.add(engine.world, [boxA, boxB, block, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }, [])
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
      <main>
        <div ref={target} className="pages">
          <section page={0} className="page__wrapper">
            <PageHome />
          </section>
          <section page={1} className="page__wrapper">
            <PageInfo />
          </section >
          {/* <section page={2} className="page__wrapper">2</section> */}
        </div>
        <Nav />
      </main>
    </>
  )
}
