import React from 'react';
import { DataContext } from '../../contexts/data-context';
import { WrapperItem } from '../wrapperItem';

export const PageInfo = () => {
    const [dropDownFullName, setDropDownFullName] = React.useState(false)
    const [dropDownStack, setDropDownStack] = React.useState(false)
    const { language, toggleLanguage } = React.useContext(DataContext)

    return (
        <>
            <div className="full_name">
                <div className="drop_down">
                    <div className="top">
                        <WrapperItem>
                            {language.full_name.name}
                        </WrapperItem>
                        <WrapperItem>
                            <button onClick={() => setDropDownFullName(!dropDownFullName)}></button>
                        </WrapperItem>
                    </div>
                    <div className={`bottom ${dropDownFullName ? "active" : ""}`}>
                        <WrapperItem>
                            <ul>
                                <li>{language.full_name.dateOfBirth}</li>
                                <li>{language.full_name.location}</li>
                                <li>{language.full_name.mobile}</li>
                                <li>{language.full_name.email}</li>
                            </ul>
                        </WrapperItem>
                    </div>
                </div>
            </div>

            <div className="description">
                <WrapperItem>
                </WrapperItem>
            </div>

            <div className="stack">
                <div className="title">
                    <h5>{language.stack.current.title}</h5>
                </div>
                <ul className="current__stack">
                    {language.stack.current.content.map((e, i) => (
                        <li key={i}>
                            <WrapperItem>
                                {e}
                            </WrapperItem>
                        </li>
                    ))}
                </ul>
                <div className="drop_down">
                    <div className="top">

                        <WrapperItem>
                            {language.stack.more.title}
                        </WrapperItem>
                        <WrapperItem>
                            <button onClick={() => setDropDownStack(!dropDownStack)}></button>
                        </WrapperItem>
                    </div>
                    <div className={`bottom ${dropDownStack ? "active" : ""}`}>
                        <ul>
                            {language.stack.more.content.map((e, i) => (
                                <li key={i}>
                                    <WrapperItem>
                                        {e}
                                    </WrapperItem>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="abuot_me">
                <WrapperItem>
                    <h5>{language.abuot_me.title}</h5>
                    <p>
                        <img src="./photo.jpg" />
                        {language.abuot_me.content}
                    </p>
                </WrapperItem>
            </div>
            <div className="languages">
                <WrapperItem>
                    <h5>{language.languages.title}</h5>
                    <ul>
                        {language.languages.content.map((e, i) => (
                            <li key={i}>{`${e.lang} - ${e.level}`}</li>
                        ))}
                    </ul>
                </WrapperItem>
            </div>

        </>
    )
}