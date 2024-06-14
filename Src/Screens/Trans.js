import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Layout from './Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Transacoes() {
    const [transacoes, setTransacoes] = useState([]);
    const endereco = 'http://192.168.1.113:8081';

    const getTransacoes = useCallback(async () => {
        try {
            const idUser = await AsyncStorage.getItem('userID');
            const response = await fetch(`${endereco}/transaction?userConnected=${idUser}`);
            const json = await response.json();
            setTransacoes(json);
        } catch (error) {
            console.error('Erro ao buscar transações:', error);
        }
    }, [endereco]);

    useFocusEffect(
        useCallback(() => {
            getTransacoes();
        }, [getTransacoes])
    );

    const renderTransactions = ({ item }) => (
        <View style={styles.transactionContainer}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionDetail}>Tipo: {item.tipoTransacao}</Text>
            <Text style={styles.transactionDetail}>Valor: {item.valor}</Text>
            <Text style={styles.transactionDetail}>Data: {item.createdAt}</Text>
        </View>
    );

    return (
        <Layout>
            <FlatList
                data={transacoes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTransactions}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    transactionContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    transactionName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    transactionDetail: {
        marginTop: 5,
        fontSize: 16,
    },
});
