import { MOVIE_ACTION } from '../action';

const initialState = {
    movies: [],
    loading: false,
    error: '',
    search: '',
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_ACTION.FETCH_PENDING:
            return Object.assign({}, state, { loading: true });

        case MOVIE_ACTION.FETCH_SUCCESS:
            return Object.assign({}, state, {
                movies: action.payload.movies,
                search: action.payload.search,
                loading: false,
            });

        case MOVIE_ACTION.FETCH_ERROR:
            return Object.assign({}, state, {
                search: '',
                movies: [],
                error: action.payload,
                loading: false,
            });
        default:
            return state;
    }
};

export default movieReducer;
