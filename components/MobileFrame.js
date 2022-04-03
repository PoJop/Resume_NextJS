import React from 'react'
import { AppContext } from '../contexts/app-context';
import useResizeObserver from '@react-hook/resize-observer'
import { Background } from './Background.js';
import { Logo } from './icons.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PageHome } from './Pages/HomePage.js';
import { InfoPage } from './Pages/InfoPage.js';
import { Nav } from './Nav/nav.js';

const useSize = (target) => {
    const [size, setSize] = React.useState()
    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}
export const MobileFrame = () => {

    const [context] = React.useContext(AppContext);
    const [fullScreenPhoto, setFullScreenPhoto] = React.useState(false)

    const target = React.useRef(null)
    const size = useSize(target)
   
    return (
        <>
            <main >
                <Background size={size} />

                {/* <article className="popup_rot_dev">
            <h2>{"<!-- Horizontal mode is still being finalized, it is better to turn off the auto-rotate screen -->"}</h2>
          </article> */}

                <div ref={target} className="pages" style={{ pointerEvents: `${!context.interaction ? "fill" : "none"}` }}>
                    <Logo />
                    <Swiper>
                        <SwiperSlide page={0} className="page__wrapper home_page" >
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
                <Nav />

            </main>
        </>
    )
}