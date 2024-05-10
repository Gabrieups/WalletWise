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

    mes:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20
    },

    calendario: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '90%',
        height: '20%',
        padding: 5,
        borderRadius: 10,
        position: 'absolute',
        left: '5%',
        top: '14%'    
    },

    text: {
        color:'white',
    },

    main: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '75%',
    },
});
