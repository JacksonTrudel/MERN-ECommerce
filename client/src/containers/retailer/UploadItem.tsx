import styles from '../../styles/containers/retailer/UploadItem';
import PageWithMargins from '../PageWithMargins';

function UploadItem() {
    return (
        <PageWithMargins>
            <div style={styles.uploadContiner}>
                <div style={styles.pageHeader}>Expand Your Shop</div>
                <div style={styles.formContainer}>
                    <div style={styles.imageUploadContainer}></div>
                    <div style={styles.infoContainer}></div>
                </div>
            </div>
        </PageWithMargins>
    );
}

export default UploadItem;
