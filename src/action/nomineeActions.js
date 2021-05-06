export const NOMINEE_ACTION = {
    ADD: 'ADD_NOMINEE',
    DELETE: 'DELETE_NOMINEE',
};

export const addNominee = (movie) => {
    return {
        type: NOMINEE_ACTION.ADD,
        payload: movie,
    };
};

export const deleteNominee = (movie) => {
    return {
        type: NOMINEE_ACTION.DELETE,
        payload: movie,
    };
};
