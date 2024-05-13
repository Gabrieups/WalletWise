import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ onLoginSuccess }) => {

  const [hasLogin, setHasLogin] = useState(false);

  const SingToLog = () =>{
    hasLogin == false ? (setHasLogin(true)) : (setHasLogin(false))
  }

  return (
    <>
      {hasLogin ? (
        <View style={styles.container}>
          <Text style={styles.title}>Entrar</Text>
          <TextInput style={styles.input} placeholder="Usuário" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button title="Entrar" onPress={onLoginSuccess} />
          <TouchableOpacity onPress={SingToLog}><Text style={{color: '#31654e', padding: 20, fontSize: 18}}>Não tenho cadastro</Text></TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Cadastrar</Text>
          <TextInput textContentType='emailAddress' style={styles.input} placeholder="Usuário" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <Button title="Cadastrar" onPress={SingToLog} />
          <TouchableOpacity onPress={SingToLog}><Text style={{color: '#31654e', padding: 20, fontSize: 18}}>Já tenho cadastro</Text></TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
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