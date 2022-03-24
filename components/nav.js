import React from 'react';

export const Nav = ({navRef}) => {
    const [navBar, setNavBar] = React.useState(false)
    return (
        <>
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
                            <button className={`nav__button ${navBar ? "active" : ""}`} onClick={() => setNavBar(!navBar)}></button>
                        </div>
                        <p>&nbsp;</p>
                        <div className="networks">
                            <h5>{"<!-- You can contact me through:   -->"}</h5>
                            <ul className="">
                                <li>
                                    <a href="https://github.com/PoJop">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#000"
                                                d="M10.928.59A11.656 11.656 0 006.682 1.79c-1.933.975-3.37 2.272-4.569 4.097a11.72 11.72 0 00-1.735 4.387c-.19 1.033-.181 3.065.009 4.065.793 4.138 3.56 7.493 7.385 8.93.628.24.876.248 1.09.033.15-.149.166-.272.166-1.264v-1.09h-1.05c-.908 0-1.115-.025-1.445-.182-.653-.298-1.09-.777-1.504-1.636-.363-.76-.826-1.33-1.396-1.735s-.124-.719.686-.487c.355.107.553.23.908.603.248.256.587.644.744.867.182.256.454.496.743.661.397.223.53.256 1.074.248.34-.009.76-.066.934-.124.29-.107.33-.173.496-.66.099-.29.264-.645.371-.777l.19-.24-.85-.182c-1.529-.322-2.396-.768-3.181-1.636-.81-.883-1.264-2.263-1.264-3.85 0-1.238.24-2.031.884-2.907l.28-.389-.098-.504c-.174-.9.066-2.495.396-2.618.347-.133 1.751.38 2.693.983l.388.248.769-.15c1.057-.214 3.345-.222 4.403-.007l.752.157.727-.422c.81-.463 1.553-.735 2.098-.768l.372-.025.157.413c.206.529.28 1.702.14 2.255l-.099.422.372.562c.66 1.008.76 1.371.76 2.792-.008 1.041-.033 1.347-.19 1.9-.463 1.611-1.446 2.66-3.007 3.23-.199.075-.736.215-1.206.314l-.851.182.181.223c.1.132.256.43.347.66.165.39.182.629.207 2.579.017 1.437.058 2.18.124 2.255.28.347.669.28 2.007-.355 1.611-.752 3.272-2.115 4.37-3.586 1.025-1.355 1.851-3.271 2.157-4.965.19-1.05.19-2.916 0-3.965-.48-2.652-1.958-5.238-3.974-6.932C17.19 1.318 14.067.31 10.928.591z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdPPhsGbkhGwSgSmfJMXMPtGFTvTrTjtlCwhjWkJjpxmmmbGwnGCftGxxPpPBXXMBQPq">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="31"
                                            height="23"
                                            fill="none"
                                            viewBox="0 0 31 23"
                                        >
                                            <path
                                                fill="#4CAF50"
                                                d="M30.165 5.89l-7.198 5.365v11.712h5.039c1.177 0 2.159-.948 2.159-2.159V5.889z"
                                            ></path>
                                            <path
                                                fill="#1E88E5"
                                                d="M0 5.89l7.165 5.397V23H2.159A2.157 2.157 0 010 20.84V5.89z"
                                            ></path>
                                            <path
                                                fill="#E53935"
                                                d="M22.967 2.29l-7.884 5.922L7.197 2.29v8.965l7.884 5.921 7.885-5.921V2.29z"
                                            ></path>
                                            <path
                                                fill="#C62828"
                                                d="M0 3.075V5.89l7.165 5.398V2.29L4.94.622A3.116 3.116 0 003.075 0 3.072 3.072 0 000 3.075z"
                                            ></path>
                                            <path
                                                fill="#FBC02D"
                                                d="M30.165 3.075V5.89l-7.198 5.366V2.29L25.225.622A3.115 3.115 0 0127.09 0a3.072 3.072 0 013.075 3.075z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/_smart_fool_/?hl=ru">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                                fill="url(#paint0_radial_110_8)"
                                                fillRule="evenodd"
                                                d="M20.346 5.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0zM12.5 16a4 4 0 110-8 4 4 0 010 8zm0-10.162a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0-3.676c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.266.07 1.645.07 4.85 0 3.204-.012 3.583-.07 4.848-.053 1.17-.249 1.806-.413 2.229-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.897-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.248-2.227-.413a3.719 3.719 0 01-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.422-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.583.07-4.849c.053-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.422-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07zM12.5 0C9.241 0 8.832.014 7.552.072 6.275.131 5.402.333 4.64.63a5.88 5.88 0 00-2.126 1.384A5.88 5.88 0 001.13 4.14c-.297.763-.5 1.635-.558 2.912C.514 8.332.5 8.742.5 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912a5.88 5.88 0 001.384 2.126A5.884 5.884 0 004.64 23.37c.763.297 1.635.5 2.912.558 1.28.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.883 5.883 0 002.126-1.384 5.883 5.883 0 001.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.69.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.884 5.884 0 00-1.384-2.126A5.882 5.882 0 0020.36.63c-.763-.297-1.635-.5-2.912-.558C16.168.014 15.758 0 12.5 0z"
                                                clipRule="evenodd"
                                            ></path>
                                            <defs>
                                                <radialGradient
                                                    id="paint0_radial_110_8"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientTransform="translate(4.083 24.083) scale(30.666)"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#FFB140"></stop>
                                                    <stop offset="0.256" stopColor="#FF5445"></stop>
                                                    <stop offset="0.599" stopColor="#FC2B82"></stop>
                                                    <stop offset="1" stopColor="#8E40B7"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/Smart_Foo1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#04ACDE"
                                                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                                            ></path>
                                            <path
                                                fill="#A8CAE1"
                                                d="M9.6 18.086l2.872-2.4-2.473-1.247-.399 3.647z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M17.756 7.097L4.62 12a.343.343 0 00.026.651l4.714 1.35a.375.375 0 01.116.06l5.914 4.543a.343.343 0 00.544-.201l2.272-10.89a.342.342 0 00-.45-.416z"
                                            ></path>
                                            <path
                                                fill="#C1D8E9"
                                                d="M8.246 13.663L9.6 18.086l.399-3.647L16.2 8.87l-7.954 4.792z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/oleg-kostetskyi-5169841b0/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#007BB5"
                                                d="M24 22.5a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0h21A1.5 1.5 0 0124 1.5v21z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M8.25 8.25h-3v10.5h3V8.25zM15.374 8.25c-2.093 0-2.453.764-2.624 1.5v-1.5h-3v10.5h3v-6c0-.973.527-1.5 1.5-1.5.95 0 1.5.516 1.5 1.5v6h3V13.5c0-3-.39-5.25-3.376-5.25zM6.75 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}