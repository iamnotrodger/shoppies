import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteNominee } from '../../action';
import Movie from '../Movie';

const NominationList = () => {
    const [height, setHeight] = useState(null);
    const ref = useRef(null);

    const nominees = useSelector((state) => state.nominees);
    const dispatch = useDispatch();

    useEffect(() => {
        const headerHeight = ref.current.children[0].offsetHeight;
        const listHeight = ref.current.children[1].offsetHeight;

        setHeight(headerHeight + listHeight + 60);
    }, []);

    const handleClick = (movie) => {
        dispatch(deleteNominee(movie));
    };

    const addHeight = (el) => {
        setHeight(height + el.offsetHeight + 15);
    };

    const subtractHeight = (el) => {
        setHeight(height - el.offsetHeight - 15);
    };

    return (
        <div className='movie-container' style={{ height }} ref={ref}>
            <h2 className='movie-container__header'>Nominations</h2>
            <TransitionGroup className='movie-container__list'>
                {nominees.map((movie) => (
                    <CSSTransition
                        key={movie.imdbID}
                        timeout={{ appear: 500, enter: 500, exit: 250 }}
                        classNames='movie-transition'
                        onEnter={addHeight}
                        onExit={subtractHeight}>
                        <Movie
                            className='movie--error'
                            value={movie}
                            onClick={() => handleClick(movie)}
                            btnTxt='Remove'
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default NominationList;
