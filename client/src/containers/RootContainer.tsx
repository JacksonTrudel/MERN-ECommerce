import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import GlobalNavBar from '../components/GlobalNavBar';
import UploadItem from './retailer/UploadItem';
import styles from '../styles/RootContainer';
import GlobalFooter from '../components/GlobalFooter';

function RootContainer() {
    return (
        <Router>
            <div style={styles.pageContainer}>
                <div style={styles.header}>
                    <GlobalNavBar />
                </div>
                <div style={styles.restOfPage}>
                    <Routes>
                        <Route path="/upload-item" element={<UploadItem />} />
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </div>
                <div style={styles.footer}>
                    <GlobalFooter />
                </div>
            </div>
        </Router>
    );
}

export default RootContainer;
