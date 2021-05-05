import { SEARCH_ACTION } from '../action';

const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_ACTION.UPDATE_SEARCH:
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;
