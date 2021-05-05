import movieReducer from './movieReducer';
import nomineeReducer from './movieReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movie: movieReducer,
    nominee: nomineeReducer,
    search: searchReducer,
});

export default reducer;
