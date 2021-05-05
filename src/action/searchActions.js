export const SEARCH_ACTION = {
    UPDATE_SEARCH: 'UPDATE_SEARCH',
};

export const updateSearch = (search) => {
    return {
        type: SEARCH_ACTION.UPDATE_SEARCH,
        payload: search,
    };
};
