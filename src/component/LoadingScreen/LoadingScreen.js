import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './LoadingScreen.css';

const LoadingScreen = ({ loading }) => {
    return (
        <CSSTransition
            in={loading}
            unmountOnExit
            timeout={1000}
            classNames='load'>
            <div className='loading-screen'>
                <div className='loading-screen__content'>
                    <div className='loading-screen__ball'></div>
                    <div className='loading-screen__text'>LOADING</div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default LoadingScreen;
