import React, { useRef, useEffect } from 'react';
import { Button, Modal, Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const DrawerContent = ({ onClose }) => {
  const navigation = useNavigation();

  const handleProfilePicChange = () => {
    console.log('Mudar foto do perfil');
  };

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
            transform: [{ translateX: slideAnim }]
          }}>
            <TouchableOpacity onPress={onClose}>
              <Feather name='x-circle' color='white' size={30} style={{alignSelf: 'flex-end', paddingRight: 10}} />
            </TouchableOpacity>
            <Button title="Mudar Foto do Perfil" onPress={handleProfilePicChange} />
            <Button title="Sair da Conta" onPress={handleLogout} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DrawerContent;
