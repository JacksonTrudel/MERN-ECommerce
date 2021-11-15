import styles from '../styles/components/ImageUpload';
import defaultProductImage from '../images/no-photo.svg';
import { useState } from 'react';

function ImageUpload() {
    const [hoveringOverButton, setHoveringOverButton] = useState(false);

    function toggleHovering() {
        setHoveringOverButton(!hoveringOverButton);
    }
    return (
        <div style={styles.imageUploadContainer}>
            <div style={styles.imagePreviewContainer}>
                <img src={defaultProductImage} alt="default_product_image" width="100%" />
            </div>
            <div style={styles.imageUploadActionContainer}>
                <div
                    style={hoveringOverButton ? styles.imageUploadButtonHovering : styles.imageUploadButton}
                    onMouseEnter={toggleHovering}
                    onMouseLeave={toggleHovering}
                >
                    Upload Image
                </div>
            </div>
        </div>
    );
}

export default ImageUpload;
