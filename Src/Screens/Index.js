import { View, Text, Button } from 'react-native';
import styles from '../../Css/Style';
import { useNavigation } from "@react-navigation/native";

export default function Index(){

    const navigation = useNavigation();

    return(
        <View style={{alignItems: 'center'}}>
            <Text>Formulário de Cadastro</Text>
            <Button onPress={() => navigation.navigate('Home')} title='Teste'/>
        </View>
    )
}