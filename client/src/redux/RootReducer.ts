import { combineReducers } from 'redux';
//import LoginReducer from './reducers/LoginReducer';
import CounterReducer from './reducers/CounterReducer';

const rootReducer = combineReducers({
    //user: LoginReducer,
    counter: CounterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
