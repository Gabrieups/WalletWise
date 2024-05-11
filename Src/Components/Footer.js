/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import styles from '../../Css/Style';
import { useNavigation } from "@react-navigation/native";


export default function Footer(){

    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: 'white', width: '100%', height: '12%', flexDirection: 'row', justifyContent: 'space-around'}}>
            
            <Pressable onPress={() => navigation.navigate('Home')} style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="home" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Pricipal</Text>
            </Pressable>
            
            <Pressable onPress={() => navigation.navigate('Planos')} style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="check-square" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Planos</Text>
            </Pressable>

            <Pressable style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '67%', left: '43%', backgroundColor: '#31654e', borderRadius: 50}}>
                <Feather name="plus" size={50} color='white'/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Transações')} style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="dollar-sign" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Transações</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Mais')} style={{alignItems: 'center', justifyContent: 'center',}}>
                <Feather name="more-horizontal" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Mais</Text>
            </Pressable>
        </View>
    )
}