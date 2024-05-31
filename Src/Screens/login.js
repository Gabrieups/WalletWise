import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import logoImage from '../Images/logoVerde.png';

const Login = ({ onLoginSuccess }) => {

  const [hasLogin, setHasLogin] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SingToLog = () =>{
    hasLogin == false ? (setHasLogin(true)) : (setHasLogin(false))
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredBox}>
        {hasLogin ? (
          <>
            <Text style={styles.title}>Entrar</Text>
            <Image source={logoImage} style={{ width: 130, height: 100 }} />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" onChangeText={setEmail} value={email} />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#999" onChangeText={setPassword} value={password} />
            <TouchableOpacity style={styles.Button} onPress={onLoginSuccess}><Text style={{ color: '#fff' }}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={SingToLog}><Text style={{ color: '#31654e', padding: 25, fontSize: 16, width: 300, textAlign: 'center', fontWeight: 'bold' }}>Não tenho cadastro</Text></TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Cadastrar</Text>
            <Image source={logoImage} style={{ width: 130, height: 100 }} />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" onChangeText={setEmail} value={email} />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#999" onChangeText={setPassword} value={password} />
            <TextInput style={styles.input} placeholder="Primeiro Nome" onChangeText={setFirstName} value={firstName} placeholderTextColor="#999" />
            <TextInput style={styles.input} placeholder="Segundo Nome" onChangeText={setLastName} value={lastName} placeholderTextColor="#999" />
            <TouchableOpacity style={styles.Button} onPress={SingToLog}><Text style={{ color: '#fff' }}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={SingToLog}><Text style={{ color: '#31654e', padding: 25, fontSize: 16, width: 200, textAlign: 'center', fontWeight: 'bold' }}>Já tenho cadastro</Text></TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31654e',
  },
  centeredBox: {
    width: 300,
    height: 500, 
    backgroundColor: '#fff',
    paddingVertical: 30, 
    paddingHorizontal: 70, 
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,

  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '160%',
    paddingVertical: 7, 
    paddingHorizontal: 10,   
    margin: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
  },
  Button: {
    width: '160%',
    backgroundColor: '#31654e',
    paddingVertical: 7, 
    paddingHorizontal: 10,  
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
});

export default Login;