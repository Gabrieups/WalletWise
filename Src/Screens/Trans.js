import { View, Text, Button, FlatList } from 'react-native';
import styles from '../../Css/Style';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Transacoes(){
    const [transacoes, setTransacoes] = useState([]);

    const endereco = 'http://192.168.1.113:8081';

    useEffect(() => {
      getTransacao();
    }, []);
  
    const getTransacao = async () => {
      try {
        const idUser = await AsyncStorage.getItem('userID');
        const response = await fetch(endereco + '/transaction?userConnected=' +idUser);
        const json = await response.json();
        setTransacoes(json);
      } catch (error) {
        console.error('Erro ao buscar transações:', error);
      }
    };
  
    const renderTransactions = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.tipoTransacao}</Text>
            <Text>{item.valor}</Text>
            <Text>{item.createdAt}</Text>
        </View>
    );
    
    return(
        <Layout>
            <FlatList
                data={transacoes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTransactions}
            />
        </Layout>
    )
};