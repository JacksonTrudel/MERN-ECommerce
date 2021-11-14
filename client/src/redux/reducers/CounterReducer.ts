import { CounterAction, GET_COUNTER, INCREMENT_COUNTER } from '../types/types';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const CounterReducer = (state = initialState, action: CounterAction): CounterState => {
    console.log(`state: ${JSON.stringify(state)} action: ` + JSON.stringify(action));
    switch (action.type) {
        case GET_COUNTER:
            return {
                ...state,
            };
        case INCREMENT_COUNTER:
            return {
                value: state.value + action.payload.incrementAmount,
            };
        default:
            return { ...state };
    }
};

export default CounterReducer;
