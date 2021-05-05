import React from 'react';

const Movie = ({ value, className, disabled, btnTxt, onClick }) => {
    const { title, year, poster } = value;

    return (
        <div className={`movie ${className}`}>
            {poster ? (
                <img src={poster} alt='poster' className='movie__poster' />
            ) : null}

            <div className='movie__info'>
                <h3 className='movie__title'>{title}</h3>
                <p className='movie__year'>{year}</p>
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
