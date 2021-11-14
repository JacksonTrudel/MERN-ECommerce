import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { RootState } from './RootReducer';

const persistConfig = {
    key: 'root',
    // Reducers we want to persist:
    whitelist: ['counter'],
    storage,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

// PERSISTOR IS NOT WORKING -> NOT RESOLVED
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
