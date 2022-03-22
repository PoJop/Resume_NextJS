import React from 'react';

export const Nav = () => {
    const [navBar, setNavBar] = React.useState(false)
    
    return (
        <>
            <nav className="nav">
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
                            <button className={`nav__button ${navBar ? "active" : ""}`} onClick={() => setNavBar(!navBar)}></button>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </nav>
        </>
    )
}