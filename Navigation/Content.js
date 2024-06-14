import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Animated, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = ({ onClose }) => {
  const navigation = useNavigation();
  const [idUser, setIdUser] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await AsyncStorage.getItem('name');
        if (name !== null) {
          setIdUser(name);
        }
      } catch (error) {
        console.log('não encontrei');
      }
    };

    fetchUserName();
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [slideAnim]);

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={onClose} activeOpacity={1}>
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Animated.View style={{
            width: '50%', 
            height: '100%', 
            backgroundColor: '#31654e', 
            paddingTop: 30, 
            transform: [{ translateX: slideAnim }],
          }}>
            <TouchableOpacity onPress={onClose}>
              <Feather name='x-circle' color='white' size={30} style={{alignSelf: 'flex-end', paddingRight: 10}} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 600, marginLeft: 10 }}>
              {`Olá, ${idUser || 'Usuário'}`}
            </Text>
            <TouchableOpacity onPress={handleLogout}><Text style={{color: '#ffffff', fontSize: 15, marginLeft: 10}}>Sair da conta</Text></TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DrawerContent;
