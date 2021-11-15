import colors from '../Colors';

const styles = {
    // enclosed in square shell
    imageUploadContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        height: '48vmin',
        width: '44vmin',
        margin: '0 2vmin',
        backgroundColor: colors.mainText,
        border: `1px solid ${colors.lightAccent}`,
    },
    imagePreviewContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'end' as 'end',
    },
    imagePreview: {
        height: '40vmin',
        width: '40vmin',
        maxHeight: '40vmin',
        maxWidth: '40vmin',
        resizeMethod: 'scale' as 'scale',
        resizeMode: 'contain' as 'contain',
    },
    imageUploadActionContainer: {
        width: '40vmin',
        height: '8vmin',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        backgroundColor: colors.mainText,
        color: colors.mainBackground,
    },
};

export default styles;
