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
        width: '90%',
        margin: '0 auto',
        borderLeft: `2px solid ${colors.darkAccent}`,
        borderRight: `2px solid ${colors.darkAccent}`,
        backgroundColor: colors.mainBackground,
    },
};

export default styles;
