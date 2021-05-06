import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './NominationBanner.css';

const NominationBanner = () => {
    const [open, setOpen] = useState(false);
    const nominees = useSelector((state) => state.nominees);

    useEffect(() => {
        if (nominees.length >= 5) setOpen(true);
        else setOpen(false);
    }, [nominees]);

    const closeBanner = () => {
        setOpen(false);
    };

    return (
        <CSSTransition
            in={open}
            timeout={500}
            unmountOnExit
            classNames='banner'>
            <div className='nomination-banner' onClick={closeBanner}>
                <div className='nomination-banner__content'>
                    <h2 className='nomination-banner__title'>Good job!</h2>
                    <h3 className='nomination-banner__subtitle'>
                        Nominated five movies.
                    </h3>
                    <button
                        className='nomination-banner__button'
                        onClick={closeBanner}>
                        Got it
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default NominationBanner;
