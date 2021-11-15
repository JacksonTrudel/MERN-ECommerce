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
        height: '20%',
        display: 'flex',
    },
    imageUploadButton: {
        display: 'flex',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        height: '80%',
        margin: 'auto',
        width: '80%',
        fontSize: '1.3em',
        backgroundColor: colors.mainText,
        color: colors.mainBackground,
        border: `1px solid ${colors.darkAccent}`,
    },
};

export default styles;
