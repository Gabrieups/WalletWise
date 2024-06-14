import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Layout from './Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Planos() {
    const [planos, setPlanos] = useState([]);
    const endereco = 'http://192.168.1.113:8081';

    const getPlanos = useCallback(async () => {
        try {
            const idUser = await AsyncStorage.getItem('userID');
            const response = await fetch(`${endereco}/plan?userConnected=${idUser}`);
            const json = await response.json();
            setPlanos(json);
        } catch (error) {
            console.error('Erro ao buscar planos:', error);
        }
    }, [endereco]);

    useFocusEffect(
        useCallback(() => {
            getPlanos();
        }, [getPlanos])
    );

    const renderPlanos = ({ item }) => (
        <View style={styles.planoContainer}>
            <Text>{item.name}</Text>
            <Text>{item.valor}</Text>
        </View>
    );

    return (
        <Layout>
            <FlatList
                data={planos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPlanos}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    planoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
