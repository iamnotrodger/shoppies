import movieReducer from './movieReducer';
import nomineeReducer from './movieReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movie: movieReducer,
    nominees: nomineeReducer,
    search: searchReducer,
});

export default reducer;
