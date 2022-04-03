import React from 'react';

export const WrapperItem = ({children}) => {

    return (
        <>
            <div className="item__wrapper __desktop">
                <div className="item__container">
                    <div className="item__content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}