import colors from './Colors';

const styles = {
    fullsizeContainerLight: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: colors.mainBackground,
    },
    fullsizeContainerDark: {
        display: 'flex',
        height: '100%',
        margin: '0',
        backgroundColor: colors.lightAccent,
    },
    mainContainerLight: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        width: '89%',
        margin: '0 auto',
        borderLeft: `2px solid ${colors.darkAccent}`,
        borderRight: `2px solid ${colors.darkAccent}`,
        backgroundColor: colors.mainBackground,
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: colors.mainText,
        color: colors.mainBackground,
        border: `1px solid ${colors.lightAccent}`,
        padding: '1em',
    },
    submitButtonHovering: {
        display: 'flex',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: colors.darkAccent,
        color: colors.mainBackground,
        border: `1px solid ${colors.darkAccent}`,
        fontWeight: 'bold' as 'bold',
        padding: '1em',
    },
};

export default styles;
