import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../action';
import useDebounce from '../../hook/useDebounce';
import SearchIcon from './SearchIcon';

import './Search.css';

const Search = () => {
    const dispatch = useDispatch();

    const fetchMoviesDebounce = useDebounce((search) => {
        try {
            dispatch(fetchMovies(search.trim()));
        } catch (error) {
            console.log(error);
        }
    }, 500);

    useEffect(() => {
        return fetchMoviesDebounce.cancel();
    }, [fetchMoviesDebounce]);

    const handleChange = (event) => {
        const { value } = event.target;
        fetchMoviesDebounce(value);
    };

    return (
        <div className='search'>
            <h3 className='search__header'>Movie Title</h3>
            <div className='search__bar'>
                <div className='search__icon'>
                    <SearchIcon />
                </div>
                <input
                    type='text'
                    className='search__input'
                    onChange={handleChange}
                    placeholder='Search for a movie title'
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Search;
