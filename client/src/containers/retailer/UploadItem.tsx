import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import ImageUpload from '../../components/ImageUpload';
import styles from '../../styles/containers/retailer/UploadItem';
import PageWithMargins from '../PageWithMargins';
import commonStyles from '../../styles/Common';
import { useState } from 'react';

function UploadItem() {
    const [hoveringOverButton, setHoveringOverButton] = useState(false);

    function toggleHovering() {
        setHoveringOverButton(!hoveringOverButton);
    }
    return (
        <PageWithMargins>
            <div style={styles.uploadContiner}>
                <div style={styles.pageHeader}>Expand Your Shop</div>
                <div style={styles.formContainer}>
                    <div style={styles.imageUploadContainer}>
                        <ImageUpload />
                    </div>
                    <div style={styles.form}>
                        <div style={styles.formItem}>
                            <FormControl
                                placeholder="Item name"
                                aria-label="name"
                                aria-describedby="basic-addon1"
                                style={{ borderRadius: '4px 4px 4px 4px' }}
                            />
                        </div>
                        <div style={styles.formItem}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Quantity"
                                    aria-label="Quantity"
                                    style={{ borderRadius: '4px 4px 4px 4px' }}
                                />
                            </InputGroup>
                        </div>
                        <div style={styles.formItem}>
                            <InputGroup>
                                <InputGroup.Text style={{ borderRadius: '4px 0px 0px 4px' }}>$</InputGroup.Text>
                                <FormControl
                                    placeholder="Price (X.XX)"
                                    aria-label="Dollar amount (with dot and two decimal places)"
                                    style={{ borderRadius: '0px 4px 4px 0px' }}
                                />
                            </InputGroup>
                        </div>
                        <div style={styles.formItem}>
                            <div
                                style={
                                    hoveringOverButton
                                        ? { ...commonStyles.submitButtonHovering, margin: '0px 35%' }
                                        : { ...commonStyles.submitButton, margin: '0px 35%' }
                                }
                                onMouseEnter={toggleHovering}
                                onMouseLeave={toggleHovering}
                            >
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWithMargins>
    );
}

export default UploadItem;
