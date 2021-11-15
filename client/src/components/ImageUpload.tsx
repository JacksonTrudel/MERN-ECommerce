import styles from '../styles/components/ImageUpload';
import defaultProductImage from '../images/no-photo.svg';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

function ImageUpload() {
    const [hoveringOverButton, setHoveringOverButton] = useState(false);
    const [selectedImage, setSelectedImage] = useState(defaultProductImage);

    function toggleHovering() {
        setHoveringOverButton(!hoveringOverButton);
    }

    function inputImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setSelectedImage(URL.createObjectURL(img));
        }
    }
    return (
        <div style={styles.imageUploadContainer}>
            <div style={styles.imagePreviewContainer}>
                <img src={selectedImage} style={styles.imagePreview} />
            </div>
            <div style={styles.imageUploadActionContainer}>
                <input
                    type="file"
                    name="selectedImage"
                    onMouseEnter={toggleHovering}
                    onMouseLeave={toggleHovering}
                    onChange={inputImageChange}
                />
            </div>
        </div>
    );
}

export default ImageUpload;
