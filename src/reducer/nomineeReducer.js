import { NOMINEE_ACTION } from '../action';

const loadNominee = () => {
    let nominees = JSON.parse(window.localStorage.getItem('nominees'));
    if (!nominees) nominees = [];
    return nominees;
};

const updateLocalStorage = (nominees) => {
    window.localStorage.setItem('nominees', JSON.stringify(nominees));
};

const addNominee = (nominees, movie) => {
    if (nominees.length < 5) {
        nominees.push(movie);
    }
    return [...nominees];
};

const deleteNominee = (nominees, movie) => {
    const index = nominees.findIndex(
        // eslint-disable-next-line eqeqeq
        (nominee) => nominee.imdbID == movie.imdbID,
    );
    if (index > -1) nominees.splice(index, 1);
    return [...nominees];
};

const nomineeReducer = (state = loadNominee(), action) => {
    switch (action.type) {
        case NOMINEE_ACTION.ADD:
            const addedState = addNominee(state, action.payload);
            updateLocalStorage(addedState);
            return addedState;

        case NOMINEE_ACTION.DELETE:
            const deletedState = deleteNominee(state, action.payload);
            updateLocalStorage(deletedState);
            return deletedState;

        default:
            return state;
    }
};

export default nomineeReducer;
