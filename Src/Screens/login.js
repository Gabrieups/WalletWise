import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ onLoginSuccess }) => {

  const [hasLogin, setHasLogin] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const SingToLog = () =>{
    hasLogin == false ? (setHasLogin(true)) : (setHasLogin(false))
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredBox}>
        {hasLogin ? (
          <>
            <Text style={styles.title}>Entrar</Text>
            <TextInput style={styles.input} placeholder="Usuário" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
            <Button title="Entrar" onPress={onLoginSuccess} />
            <TouchableOpacity onPress={SingToLog}><Text style={{color: '#31654e', padding: 20, fontSize: 18}}>Não tenho cadastro</Text></TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Cadastrar</Text>
            <TextInput textContentType='emailAddress' style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
            <TextInput style={styles.input} placeholder="Primeiro Nome" value={lastName} onChangeText={text => setFirstName(text)} />
            <TextInput style={styles.input} placeholder="Segundo Nome" value={lastName} onChangeText={text => setLastName(text)} />
            <Button title="Cadastrar" onPress={SingToLog} />
            <TouchableOpacity onPress={SingToLog}><Text style={{color: '#31654e', padding: 20, fontSize: 18}}>Já tenho cadastro</Text></TouchableOpacity>
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
    width: '70%',
    backgroundColor: '#fff',
    padding: 80,
    borderRadius: 7,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Login;