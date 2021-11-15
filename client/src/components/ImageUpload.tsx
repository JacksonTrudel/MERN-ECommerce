import styles from '../styles/components/ImageUpload';
import defaultProductImage from '../images/no-photo.svg';

function ImageUpload() {
    return (
        <div style={styles.imageUploadContainer}>
            <div style={styles.imagePreviewContainer}>
                <img src={defaultProductImage} alt="default_product_image" width="100%" />
            </div>
            <div style={styles.imageUploadActionContainer}>
                <div style={styles.imageUploadButton}>Upload Image</div>
            </div>
        </div>
    );
}

export default ImageUpload;
