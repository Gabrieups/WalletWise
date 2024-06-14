import { View, Text, Button, FlatList } from 'react-native';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Planos(){
    const [planos, setPlanos] = useState([]);

    const endereco = 'http://192.168.1.113:8081';

    useEffect(() => {
      getPlanos();
    }, []);

    const getPlanos = async () => {
      try {
        const idUser = await AsyncStorage.getItem('userID');
        const response = await fetch(endereco + '/plan?userConnected=' +idUser);
        const json = await response.json();
        setPlanos(json);
      } catch (error) {
        console.error('Erro ao buscar planos:', error);
      }
    };
  
    const renderPlanos = ({ item }) => (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text>{item.name}</Text>
            <Text>{item.valor}</Text>
        </View>
    );
    
    return(
        <Layout>
            <FlatList
                data={planos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPlanos}
            />
        </Layout>
    )
};