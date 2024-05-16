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

    btnAdd1: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 8,
        position: 'relative',
        top: '25%'
    },

    btnAdd2: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 8,
        position: 'relative',
        bottom: '60%'
    },

    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Escurece o fundo com opacidade
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999, // Garantir que a sobreposição fique sobre todo o conteúdo
    },

    txtBtnAdd1: {
        alignSelf: 'center',
        color: 'white',
        position: 'relative',
        top: '30%'
    },

    txtBtnAdd2: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        bottom: '50%',
        width: '60%'
    }
});
