import React from 'react';
import { AppContext } from '../../contexts/app-context';
import { Networks } from './components/networks';
import { SettingPopup } from './components/settingPopup';

export const Nav = () => {
    const [context, setContext] = React.useContext(AppContext);
    const [navBar, setNavBar] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)
    const [openSettingPopup, setOpenSettingPopup] = React.useState(false)
    const navRef = React.useRef(null)

    React.useEffect(() => { if (navBar) setOpenSettingPopup(false) }, [navBar])
    React.useEffect(() => { if (openSettingPopup) setNavBar(false) }, [openSettingPopup])

    React.useEffect(() => { if (navRef !== null) setContext({ ...context, navRef: navRef.current }) }, [navRef])

    React.useEffect(() => { setDisabled(true); setTimeout(() => setDisabled(false), 300) }, [navBar])
    return (
        <>
            <SettingPopup openSettingPopup={openSettingPopup} setDisabled={setDisabled} />
            <nav className="nav" ref={navRef}>
                <div className={`nav_wrapper ${navBar ? "active" : ""}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="69.5"
                        fill="none"
                        className="svgFirstPart"
                        preserveAspectRatio="none"
                        viewBox="0 0 360 69.5"
                    >
                        <g filter="url(#filter0_d)">
                            <path fill="#fff" d="M0 22.5h365C265-2 104-2-5 22.5z"></path>
                        </g>
                        <path fill="#fff" d="M0 21.5H360V73H0z"></path>
                        <defs>
                            <filter
                                id="filter0_d"
                                width="360"
                                height="26"
                                x="0"
                                y="0"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                ></feBlend>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                ></feBlend>
                            </filter>
                        </defs>
                    </svg>
                    <svg
                        fill="#fff"
                        className="svgLastPart"
                        preserveAspectRatio="none"
                        viewBox="0 0 360 158.5"
                    >
                        <path d="M0 0H360V158H0z"></path>
                        <rect width="100%" className="rect2"></rect>
                    </svg>
                    <div className="content">

                        <div className="button_item">
                            <div>
                                <button
                                    onClick={() => setOpenSettingPopup(!openSettingPopup)}
                                    id="setting_popup"
                                    active={openSettingPopup ? 1 : 0}
                                    className={`${openSettingPopup ? "active" : ""}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill="#EA916B"
                                            d="M10.302 7.024a3.15 3.15 0 00-1.818.374A3.026 3.026 0 007.219 8.72a2.915 2.915 0 00-.25 1.79c.108.608.407 1.168.855 1.604a3.108 3.108 0 001.65.832c.625.105 1.268.02 1.842-.244a3.044 3.044 0 001.361-1.23 2.92 2.92 0 00-.503-3.586 3.12 3.12 0 00-1.872-.863zM17.711 10c-.002.325-.027.65-.074.972l2.173 1.657a.493.493 0 01.118.643l-2.056 3.457a.518.518 0 01-.276.22.535.535 0 01-.356-.006l-2.158-.844a.795.795 0 00-.73.081c-.329.22-.675.417-1.035.586a.76.76 0 00-.285.233.733.733 0 00-.139.335l-.324 2.238a.514.514 0 01-.177.303.541.541 0 01-.336.125H7.944a.543.543 0 01-.332-.12.517.517 0 01-.182-.294l-.323-2.235a.74.74 0 00-.143-.338.768.768 0 00-.29-.233 7.52 7.52 0 01-1.031-.588.784.784 0 00-.727-.08l-2.158.845a.534.534 0 01-.356.005.517.517 0 01-.276-.219L.07 13.285a.492.492 0 01.118-.643l1.837-1.401c.1-.078.18-.179.23-.294.05-.115.07-.24.059-.364a6.195 6.195 0 010-1.161.73.73 0 00-.292-.652L.186 7.368a.493.493 0 01-.114-.64l2.056-3.457a.517.517 0 01.276-.22.534.534 0 01.356.006l2.158.844a.795.795 0 00.73-.081c.329-.22.675-.417 1.035-.586a.761.761 0 00.285-.232.733.733 0 00.139-.336L7.43.43a.515.515 0 01.178-.304A.542.542 0 017.944 0h4.112a.543.543 0 01.332.12c.093.075.158.179.182.294l.323 2.235a.739.739 0 00.143.338c.075.1.175.18.29.233.36.169.704.365 1.031.587a.783.783 0 00.727.08l2.158-.844a.534.534 0 01.356-.005c.115.04.213.117.276.219l2.056 3.458a.493.493 0 01-.118.642L17.975 8.76a.731.731 0 00-.29.658c.015.194.026.388.026.583z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`nav__button ${navBar ? "active" : ""}`}
                                    active={navBar ? 1 : 0}
                                    disabled={disabled}
                                    ref={navRef}
                                    onClick={() => setNavBar(!navBar)}
                                ></button>
                            </div>

                        </div>
                        <p>&nbsp;</p>
                        <Networks />
                    </div>
                </div>
            </nav>
        </>
    )
}