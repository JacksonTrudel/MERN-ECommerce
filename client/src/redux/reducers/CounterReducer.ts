import { GET_COUNTER, INCREMENT_COUNTER } from '../types/types';
import { AnyAction } from 'redux';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const CounterReducer = (state = initialState, action: AnyAction): CounterState => {
    console.log(`state: ${JSON.stringify(state)} action: ` + JSON.stringify(action));
    switch (action.type) {
        case GET_COUNTER:
            return {
                ...state,
            };
        case INCREMENT_COUNTER:
            return {
                value: state.value + action.incrementAmount,
            };
        default:
            return { ...state };
    }
};

export default CounterReducer;
