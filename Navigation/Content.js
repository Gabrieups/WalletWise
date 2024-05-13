import React, { useRef, useEffect } from 'react';''
import { Button, Modal, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

const DrawerContent = ({ onClose }) => {
  const handleProfilePicChange = () => {
    console.log('Mudar foto do perfil');
  };

  const handleLogout = () => {
    console.log('Usuário deslogado');
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
    transparent={true}>
        <Animated.View style={{width: '50%', height: '100%', backgroundColor: '#31654e', paddingTop: 30, transform: [{ translateX: slideAnim }]}}>
          <TouchableOpacity onPress={onClose}><Feather name='x-circle' color='white' size={30} style={{alignSelf: 'flex-end', paddingRight: 10}} /></TouchableOpacity>
          <Button title="Mudar Foto do Perfil" onPress={handleProfilePicChange} />
          <Button title="Sair da Conta" onPress={handleLogout} />
        </Animated.View>
    </Modal>
  );
};

export default DrawerContent;
