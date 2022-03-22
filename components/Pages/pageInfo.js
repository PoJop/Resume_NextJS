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
                            {language.pageInfo.full_name.name}
                        </WrapperItem>
                        <WrapperItem>
                            <button
                                onClick={() => setDropDownFullName(!dropDownFullName)}
                                className="btn-more"
                            >
                                more
                            </button>
                        </WrapperItem>
                    </div>
                    <div className={`bottom ${dropDownFullName ? "active" : ""}`}>
                        <WrapperItem>
                            <ul>
                                <li>{language.pageInfo.full_name.dateOfBirth}</li>
                                <li>{language.pageInfo.full_name.location}</li>
                                <li>{language.pageInfo.full_name.mobile}</li>
                                <li>{language.pageInfo.full_name.email}</li>
                            </ul>
                        </WrapperItem>
                    </div>
                </div>
            </div>

            <div className="description">
                <WrapperItem>
                    <p dangerouslySetInnerHTML={{ __html: language.pageInfo.description.content }} />
                </WrapperItem>
            </div>

            <div className="stack">
                <div className="title">
                    <h5>{language.pageInfo.stack.current.title}</h5>
                </div>
                <ul className="current__stack">
                    {language.pageInfo.stack.current.content.map((e, i) => (
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
                            {language.pageInfo.stack.more.title}
                        </WrapperItem>
                        <WrapperItem>
                            <button
                                onClick={() => setDropDownStack(!dropDownStack)}
                                className="btn-more"
                            >
                                more
                            </button>
                        </WrapperItem>
                    </div>
                    <div className={`bottom ${dropDownStack ? "active" : ""}`}>
                        <ul>
                            {language.pageInfo.stack.more.content.map((e, i) => (
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
                    <h5>{language.pageInfo.abuot_me.title}</h5>
                    <p>
                        <img src="./photo.jpg" />
                        {language.pageInfo.abuot_me.content}
                    </p>
                </WrapperItem>
            </div>
            <div className="languages">
                <WrapperItem>
                    <h5>{language.pageInfo.languages.title}</h5>
                    <ul>
                        {language.pageInfo.languages.content.map((e, i) => (
                            <li key={i}>{`${e.lang} - ${e.level}`}</li>
                        ))}
                    </ul>
                </WrapperItem>
            </div>
            <div className="experience">
                <h5>{language.pageInfo.experience.title}</h5>
                <WrapperItem>
                    <ul>
                        {language.pageInfo.experience.content.map((e, i) => (
                            <li key={i}>
                                <h6>{e.title}</h6>
                                <small>{e.period}</small>
                            </li>
                        ))}
                    </ul>
                </WrapperItem>
            </div>
            <div className="p-s_message">
                <strong>{language.pageInfo.message}</strong>
            </div>
        </>
    )
}