import React from 'react'
import { DataContext } from '../../contexts/data-context'

export const PageHome = () => {

    const { language } = React.useContext(DataContext)
    
    return (
        <>
            <div className="title">
                <h1 dangerouslySetInnerHTML={{ __html: language.pageHome.title }} />
                <strong dangerouslySetInnerHTML={{ __html: language.pageHome.subTitle }} />
            </div>
            <div className="arrow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="169"
                    height="146"
                    fill="none"
                    className="svg_arrow"
                    viewBox="0 0 169 146"
                >
                    <path
                        fill="#fff"
                        fillOpacity="0.1"
                        d="M169 73L60.25 136.22V9.78L169 73z"
                    ></path>
                    <path fill="#fff" fillOpacity="0.1" d="M0 43H60.25V103H0z"></path>
                </svg>
            </div>
            <div className="help">
                <p>Toggle settings</p>
            </div>
        </>
    )
}