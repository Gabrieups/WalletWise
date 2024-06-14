import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Layout from './Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Mais(){
    const [categories, setCategories] = useState([]);

    const endereco = 'http://192.168.1.113:8081';

    useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      try {
        const idUser = await AsyncStorage.getItem('userID');
        const response = await fetch(endereco + '/categories?userConnected=' +idUser);
        const json = await response.json();
        setCategories(json);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };
  
    const renderCategory = ({ item }) => (
      <View style={styles.categoryContainer}>
        <MaterialIcons name={item.iconeCategoria} size={30} color={item.colorCategoria}/>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    );
    
    return(
        <Layout>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCategory}
            />
        </Layout>
    )
};

const styles = StyleSheet.create({
    categoryContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
  });