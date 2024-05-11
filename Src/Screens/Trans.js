import { View, Text, Button } from 'react-native';
import styles from '../../Css/Style';
import Layout from './Layout';

export default function Transacoes(){
    return(
        <Layout>
            <View style={{alignItems: 'center'}}>
                <Text>Transações</Text>
            </View>
        </Layout>
    )
}