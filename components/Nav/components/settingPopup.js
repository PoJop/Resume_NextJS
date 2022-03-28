import React from 'react'
import { AppContext } from '../../../contexts/app-context';

export const SettingPopup = ({ openSettingPopup }) => {

    const [context, setContext] = React.useContext(AppContext);

    const handlerOrientation = () => {
        if (!context.gravity) {
            setContext({ ...context, orientation: true, gravity: true })
        } else {
            setContext({ ...context, orientation: !context.orientation })
        }
    }
    const handlerGravity = () => {
        if (context.gravity) {
            setContext({ ...context, orientation: false, gravity: false })
        } else {
            setContext({ ...context, gravity: !context.gravity })
        }
    }
    React.useEffect(() => {
        console.log(context)
    }, [context])

    return (
        <>
            <article className={`setting_popup ${openSettingPopup ? "open" : ""}`}>
                <div className="wrapper">
                    <div className="bar">
                        <div className="container">
                            <ul>
                                <li>
                                    <strong>Orientation</strong>
                                    <button
                                        onClick={() => handlerOrientation()}
                                        active={context.orientation ? 1 : 0}
                                        className={`button_setting orientation ${context.orientation ? "active" : ""}`}
                                    >
                                        <span>{context.orientation ? "on" : "off"}</span>
                                    </button>
                                </li>
                                <li>
                                    <strong>Gravity</strong>
                                    <button
                                        onClick={() => handlerGravity()}
                                        active={context.gravity ? 1 : 0}
                                        className={`button_setting gravity ${context.gravity ? "active" : ""}`}

                                    >
                                        <span>{context.gravity ? "on" : "off"}</span>
                                    </button>
                                </li>
                                <li>
                                    <strong>Interaction</strong>
                                    <button
                                        onClick={() => setContext({ ...context, interaction: !context.interaction })}
                                        className={`button_setting interaction ${context.interaction ? "active" : ""}`}
                                    >
                                        <span>{context.interaction ? "on" : "off"}</span>
                                    </button>
                                </li>
                            </ul>
                            <button className="button_reset">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14"
                                    fill="none"
                                    viewBox="0 0 15 14"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M9.375 3.992s.714-.328-1.875-.328c-.927 0-1.833.257-2.604.737a4.455 4.455 0 00-1.727 1.964c-.354.8-.447 1.679-.266 2.528.18.848.627 1.628 1.282 2.24a4.8 4.8 0 002.4 1.197c.91.169 1.852.082 2.709-.249a4.633 4.633 0 002.104-1.611 4.17 4.17 0 00.79-2.43"
                                    ></path>
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7.5 1.586l2.344 2.187L7.5 5.961"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}