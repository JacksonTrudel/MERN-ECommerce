import { GET_COUNTER, INCREMENT_COUNTER } from '../types/types';

export const getCounter = () => {
    return { type: GET_COUNTER };
};

export const incrementCounter = (incrementAmount: number) => {
    return {
        type: INCREMENT_COUNTER,
        incrementAmount,
    };
};
