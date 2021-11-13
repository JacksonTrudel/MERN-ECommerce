import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './containers/Homepage';
import GlobalNavBar from './components/GlobalNavBar';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>...loading</div>} persistor={persistor}>
                <div className="App">
                    <GlobalNavBar />
                    <Router>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                        </Routes>
                    </Router>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
