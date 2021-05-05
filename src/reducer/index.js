import movieReducer from './movieReducer';
import nomineeReducer from './movieReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    movie: movieReducer,
    nominees: nomineeReducer,
});

export default reducer;
