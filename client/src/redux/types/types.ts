export const GET_LOGIN = 'GET_LOGIN';
export const SET_LOGIN = 'SET_LOGIN';

export const GET_COUNTER = 'GET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export interface GetCounterAction {
    type: 'GET_COUNTER';
}

export interface IncrementCounterPayload {
    incrementAmount: number;
}

export interface IncrementCounterAction {
    type: 'INCREMENT_COUNTER';
    payload: IncrementCounterPayload;
}

export type CounterAction = GetCounterAction | IncrementCounterAction;
