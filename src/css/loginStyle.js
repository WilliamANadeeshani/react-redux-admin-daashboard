import Logo from './img/page-logo.png';

const styles = () => ({
    root: {
        height: '100vh',
        backgroundImage: `url(${Logo})`,
        backgroundColor: '#006db3',
        backgroundSize: 'cover',
        backgroundPosition: 'center'


    },
    formBlock: {
        display: 'flex',
        width: '800px',
        margin: '0 auto',
        justifyContent: 'center'
    },
    logoRoot: {
        height: "35%"
    },
    cardRoot: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: '#ffa931',
    },
    paper: {
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%'
    },
    submit: {
        marginTop: '15px',
        width: '55%',
        color:"primary"
    },
    backdrop: {
        zIndex: 1,
        color: '#fff',
    },
    alertRoot: {
        width: '100%'
    }
});

export default styles;