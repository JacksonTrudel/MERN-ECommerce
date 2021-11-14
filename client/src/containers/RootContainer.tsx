import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import GlobalNavBar from '../components/GlobalNavBar';
import UploadItem from './retailer/UploadItem';
import styles from '../styles/RootContainer';
import GlobalFooter from '../components/GlobalFooter';

function RootContainer() {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <GlobalNavBar />
            </div>
            <div style={styles.restOfPage}>
                <Router>
                    <Routes>
                        <Route path="/upload-item" element={<UploadItem />} />
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </Router>
            </div>
            <div style={styles.footer}>
                <GlobalFooter />
            </div>
        </div>
    );
}

export default RootContainer;
