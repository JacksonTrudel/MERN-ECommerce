import colors from '../../Colors';

const styles = {
    uploadContiner: {
        diplay: 'flex',
        flexDirection: 'row' as 'row',
        margin: '5% auto 5% 5%',
        width: '90%',
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
        flex: '0 0 auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        flex: '1 1 auto',
        width: '100%',
    },
    formItem: {
        margin: '3%',
    },
};

export default styles;
