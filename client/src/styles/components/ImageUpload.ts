import colors from '../Colors';

const styles = {
    // enclosed in square shell
    imageUploadContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        margin: '1%',
        height: '100%',
    },
    imagePreviewContainer: {
        height: '80%',
    },
    imageUploadActionContainer: {
        padding: '10px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        backgroundColor: colors.mainText,
        color: colors.mainBackground,
    },
};

export default styles;
