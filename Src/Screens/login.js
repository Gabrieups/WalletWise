import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import logoImage from '../Images/logoVerde.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [hasLogin, setHasLogin] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const endereco = 'http://192.168.1.113:8081';

  let data;

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }, [hasLogin]);

  const SingToLog = () => {
    setHasLogin(!hasLogin);
    setErrorMessage('');
  };

  async function cadastroUser() {
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage('Todos os campos são obrigatórios.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsLoading(true);

    try {
      console.log('Iniciando cadastro com:', {
        nameUser: firstName,
        lastnameUser: lastName,
        emailUser: email,
        pswdUser: password
      });

      const reqs = await fetch(endereco + '/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          nameUser: firstName,
          lastnameUser: lastName,
          emailUser: email,
          pswdUser: password
        })
      });

      const ress = await reqs.json();
      if (ress) {
        setHasLogin(true);
        setErrorMessage('Cadastro realizado com sucesso. Por favor, faça login.');
      } else {
        setErrorMessage(ress.message || 'Erro ao cadastrar. Tente novamente mais tarde.');
      }
    } catch (error) {
      setErrorMessage('Erro ao cadastrar. Tente novamente mais tarde.');
    }

    setIsLoading(false);
  }

  async function loginUser() {
    if (!email || !password) {
      setErrorMessage('Por favor, insira um email e senha válidos.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsLoading(true);

    try {
      console.log('Iniciando login com:', {
        email: email,
        password: password
      });

      const response = await fetch(endereco + '/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      data = await response.json();
      console.log('Login resposta:', data);

      if (data.success) {
        await AsyncStorage.setItem('userID', String(data.userID));
        await AsyncStorage.setItem('name', String(data.name));
        console.log(data.userID);
        console.log(data.name);
        navigation.replace('Main');
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log('Erro ao fazer login:', error);
      setErrorMessage('Erro ao fazer login. Tente novamente mais tarde.');
    }

    setIsLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          {hasLogin ? (
            <>
              <Text style={styles.title}>Entrar</Text>
              <Image source={logoImage} style={{ width: 130, height: 100 }} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
              />
              {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
              <TouchableOpacity style={styles.Button} onPress={loginUser}>
                <Text style={{ color: '#fff' }}>{isLoading ? 'Carregando...' : 'Entrar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={SingToLog}>
                <Text style={{ color: '#31654e', padding: 25, fontSize: 16, width: 300, textAlign: 'center', fontWeight: 'bold' }}>Não tenho cadastro</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Cadastrar</Text>
              <Image source={logoImage} style={{ width: 130, height: 100 }} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Primeiro Nome"
                value={firstName}
                onChangeText={setFirstName}
                placeholderTextColor="#999"
              />
              <TextInput
                style={styles.input}
                placeholder="Segundo Nome"
                value={lastName}
                onChangeText={setLastName}
                placeholderTextColor="#999"
              />
              {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
              <TouchableOpacity style={styles.Button} onPress={cadastroUser}>
                <Text style={{ color: '#fff' }}>{isLoading ? 'Carregando...' : 'Cadastrar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={SingToLog}>
                <Text style={{ color: '#31654e', padding: 25, fontSize: 16, width: 200, textAlign: 'center', fontWeight: 'bold' }}>Já tenho cadastro</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    height: 550,
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
  errorText: {
    color: 'red',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default Login;
