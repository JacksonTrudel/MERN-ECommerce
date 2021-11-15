import colors from '../Colors';

const mainButtonStyle = {
    display: 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    height: '80%',
    padding: 'auto',
    width: '80%',
    fontSize: '1.3em',
    border: `1px solid ${colors.darkAccent}`,
};

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
        width: '100%',
        display: 'flex',
        justifyContent: 'center' as 'center',
    },
    imageUploadButton: {
        ...mainButtonStyle,
        backgroundColor: colors.mainText,
        color: colors.mainBackground,
    },
    imageUploadButtonHovering: {
        ...mainButtonStyle,
        backgroundColor: colors.darkAccent,
        color: colors.mainBackground,
    },
};

export default styles;
