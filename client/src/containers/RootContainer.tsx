import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import GlobalNavBar from '../components/GlobalNavBar';

function RootContainer() {
    return (
        <div className="App">
            <GlobalNavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default RootContainer;
