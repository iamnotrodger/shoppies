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
            {search ? (
                <h2 className='movie-container__header'>{`Results for "${search}"`}</h2>
            ) : null}
            <TransitionGroup className='movie-container__list'>
                {movies.map((movie) => (
                    <CSSTransition key={movie.imdbID} timeout={500}>
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
    const index = nominees.findIndex(
        // eslint-disable-next-line eqeqeq
        (nominee) => nominee.imdbID == movie.imdbID,
    );
    return index > -1 || nominees.length >= 5;
};

export default MovieList;
