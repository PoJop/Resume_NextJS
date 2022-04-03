import React from 'react'
import { Background } from './Background.js'
import { Networks } from './Nav/components/networks.js';
import { Logo, QRSite } from './icons.js';
import { PageHome } from './homePage.js';
import { InfoPage } from './infoPage.js';

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