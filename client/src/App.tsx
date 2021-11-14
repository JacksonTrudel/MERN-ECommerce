import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

import { PersistGate } from 'redux-persist/lib/integration/react';
import RootContainer from './containers/RootContainer';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootContainer />
            </PersistGate>
        </Provider>
    );
}

export default App;
