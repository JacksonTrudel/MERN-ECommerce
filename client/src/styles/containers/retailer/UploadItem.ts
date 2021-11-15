import colors from '../../Colors';

const styles = {
    uploadContiner: {
        diplay: 'flex',
        flexDirection: 'column' as 'column',
        width: '90%',
        margin: '5% auto',
    },
    pageHeader: {
        textAlign: 'start' as 'start',
        color: colors.mainText,
        fontSize: '3em',
        margin: '2% 0px',
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
