import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { RootState } from './RootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    // Reducers we want to persist:
    //whitelist: ['ci', 'value'],
    //stateReconciler: autoMergeLevel2,
    storage,
    debug: true,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer({}));

// PERSISTOR IS NOT WORKING -> NOT RESOLVED
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
