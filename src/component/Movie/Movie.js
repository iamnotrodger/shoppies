import React from 'react';

import './Movie.css';

const Movie = ({ value, className, disabled, btnTxt, onClick }) => {
    const { Title, Year, Poster } = value;

    return (
        <div className={`movie ${className}`}>
            <div
                className='movie__poster'
                style={{ backgroundImage: `url(${Poster})` }}
            />
            <div className='movie__info'>
                <h3 className='movie__title'>{Title}</h3>
                <p className='movie__year'>{Year}</p>
            </div>

            <button
                disabled={disabled}
                className='movie__button'
                onClick={onClick}>
                {btnTxt || 'Click Me'}
            </button>
        </div>
    );
};

Movie.defaultProps = {
    disabled: false,
    className: '',
};

export default Movie;
