import { createTheme } from '@mui/material/styles'

let theme = createTheme({
    root: {},

    label: {
        '& .MuiFormControlLabel-label': {
            fontSize: 14,
            marginLeft: '5px',
            alignSelf: 'flex-start',
        },
    },
    formControl: {
        width: '100%',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '30px 0 30px 0',
    },
    card: {
        minWidth: '320px',
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        alignContent: 'flex-start',
    },
    cardItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    red: {
        color: '#ef426f',
    },
    green: {
        color: '#70ae54',
    },
    checkbox: {
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ef426f',
        paddingBottom: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        '& span': {
            fontWeight: 'normal',
        },
    },
})

theme = createTheme(theme, {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 0 30px 0',
        [theme.breakpoints.down('md')]: {
            margin: '0 10px 0 10px',
        },
    },
})
export default theme
