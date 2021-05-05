import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, updateSearch } from '../../action';
import useDebounce from '../../hook/useDebounce';
import SearchIcon from './SearchIcon';

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
        dispatch(updateSearch(value));
    };

    return (
        <div className='search'>
            <div className='search__icon'>
                <SearchIcon />
            </div>
            <input
                type='text'
                className='search__input'
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
