import { View, Text } from 'react-native';
import Layout from './Layout';

export default function Principal(){
    return(
        <Layout>
            <View style={{alignItems: 'center', marginTop: 200}}>
                <Text style={{color: '#31654e', fontSize: 30, textAlign: 'center', marginHorizontal: 15}}>Ops...</Text>
                <Text style={{color: '#31654e', fontSize: 20, textAlign: 'center', marginHorizontal: 15}}>Um erro ocorreu enquanto fazíamos sua requisição</Text>
            </View>
        </Layout>
    )
}