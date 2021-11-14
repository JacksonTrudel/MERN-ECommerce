import { CounterAction, GET_COUNTER, IncrementCounterPayload, INCREMENT_COUNTER } from '../types/types';

export const getCounter = (): CounterAction => {
    return { type: GET_COUNTER };
};

export const incrementCounter = (payload: IncrementCounterPayload): CounterAction => {
    return {
        type: INCREMENT_COUNTER,
        payload,
    };
};
