import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import nomineeReducer from './nomineeReducer';

const reducer = combineReducers({
    movie: movieReducer,
    nominees: nomineeReducer,
});

export default reducer;
