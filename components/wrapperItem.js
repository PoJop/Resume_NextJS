import React from 'react';

export const WrapperItem = ({children}) => {

    return (
        <>
            <div className="item__wrapper">
                <div className="item__container">
                    <div className="item__content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}