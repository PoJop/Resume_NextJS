import React from 'react'
import { Background } from '../Background'
import gsap from "gsap";
import { InfoPage } from '../Pages/InfoPage';
import { PageHome } from '../Pages/HomePage';
import { Networks } from '../Nav/components/networks';
import { Logo, QRSite } from '../icons';

export const DesktopFrame = () => {

    const [fullScreenPhoto, setFullScreenPhoto] = React.useState(false)
    
    return (
        <>
            <main >
                <Background size={{ width: window.innerWidth, height: window.innerHeight }} />
                <div className="container">
                    <div>
                        <div>
                            <Logo />
                            <PageHome />
                            <footer >
                                <div className="qr_wrapper">
                                    <QRSite />
                                </div>
                                <Networks />
                            </footer>
                        </div>
                    </div>
                    <div  style={{ height: window.innerHeight - 80 }}>
                        <div>
                            <InfoPage setFullScreenPhoto={setFullScreenPhoto} />
                        </div>
                    </div>
                </div>
                <article className={`full_screen_photo ${fullScreenPhoto ? "open" : ""}`} onClick={() => setFullScreenPhoto(false)}>
                    <div>
                        <img src="./photo.jpg" />
                    </div>
                </article>
            </main>
        </>
    )
}