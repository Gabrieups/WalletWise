import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body:{
        backgroundColor: '#31654e',
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%'
    },

    header:{
        flexDirection: 'row',
        width: '96%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    calendario:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20
    },

    text: {
        color:'white',
    },

    main: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '75%',
    },
    
    btnMudarMes: {
        color: 'white',
        fontSize: 30,
        paddingHorizontal: 10
    },
});
