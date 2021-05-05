export const MOVIE_ACTION = {
    FETCH_PENDING: 'MOVIE_FETCH_PENDING',
    FETCH_SUCCESS: 'MOVIE_FETCH_SUCCESS',
    FETCH_ERROR: 'MOVIE_FETCH_ERROR',
};

export const fetchMovies = (search) => async (dispatch) => {
    dispatch({
        type: MOVIE_ACTION.FETCH_PENDING,
    });
    try {
        const movies = await searchMovies(search);
        dispatch({
            type: MOVIE_ACTION.FETCH_SUCCESS,
            payload: movies,
        });
    } catch (error) {
        dispatch({
            type: MOVIE_ACTION.FETCH_ERROR,
            payload: error,
        });
    }
};

const searchMovies = async (search) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}&s=${search}&type=movie`,
    );

    if (!response.ok) return [];

    const { Search } = await response.json();
    return Search || [];
};
