import colors from '../../Colors';

const styles = {
    uploadContiner: {
        diplay: 'flex',
        flexDirection: 'column' as 'column',
        width: '90%',
        margin: '0 auto',
    },
    pageHeader: {
        textAlign: 'start' as 'start',
        color: colors.mainText,
        fontSize: '3em',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
    },
    imageUploadContainer: {
        display: 'flex',
        flex: '1 1 auto',
    },
    infoContainer: {
        display: 'flex',
        flex: '1 1 auto',
    },
};

export default styles;
