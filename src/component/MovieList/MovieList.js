import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { addNominee } from '../../action';
import LoadingScreen from '../LoadingScreen';
import Movie from '../Movie/Movie';

const MovieList = () => {
    const { movies, search, loading } = useSelector((state) => state.movie);
    const nominees = useSelector((state) => state.nominees);
    const dispatch = useDispatch();

    const handleClick = (movie) => {
        dispatch(addNominee(movie));
    };

    return (
        <div className='movie-container'>
            <h2 className='movie-container__header'>{`Results for "${search}"`}</h2>
            <TransitionGroup className='movie-container__list'>
                {movies.map((movie) => (
                    <CSSTransition
                        key={movie.imdbID}
                        timeout={{ appear: 500, enter: 500, exit: 250 }}
                        classNames='movie-transition'>
                        <Movie
                            value={movie}
                            disabled={isNominated(movie, nominees)}
                            onClick={() => handleClick(movie)}
                            btnTxt='Nominate'
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <LoadingScreen loading={loading} />
        </div>
    );
};

const isNominated = (movie, nominees) => {
    if (nominees.length < 5) {
        const index = nominees.findIndex(
            // eslint-disable-next-line eqeqeq
            (nominee) => nominee.imdbID == movie.imdbID,
        );
        return index > -1;
    }

    return true;
};

export default MovieList;
