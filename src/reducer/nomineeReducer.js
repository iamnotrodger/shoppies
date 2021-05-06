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
        const index = nominees.findIndex(
            // eslint-disable-next-line eqeqeq
            (nominee) => nominee.imdbID == movie.imdbID,
        );

        if (index < 0) nominees.push(movie);
    }
    return [...nominees];
};

const deleteNominee = (nominees, movie) => {
    // eslint-disable-next-line eqeqeq
    return nominees.filter((nominee) => nominee.imdbID !== movie.imdbID);
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
