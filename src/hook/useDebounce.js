import { debounce } from 'lodash';
import { useCallback } from 'react';

const useDebounce = (callback, delay) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFunction = useCallback(
        debounce((...args) => callback(...args), delay),
        [callback, delay],
    );
    return debounceFunction;
};

export default useDebounce;
