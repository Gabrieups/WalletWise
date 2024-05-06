/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import styles from '../Css/Style';


export function Footer(){
    return(
        <View style={{backgroundColor: 'white', width: '100%', height: '12%', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Pressable style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="home" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Pricipal</Text>
            </Pressable>
            
            <Pressable style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="check-square" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Planos</Text>
            </Pressable>

            <Pressable style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '67%', left: '43%', backgroundColor: '#31654e', borderRadius: 50}}>
                <Feather name="plus" size={50} color='white'/>
            </Pressable>

            <Pressable style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="dollar-sign" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Transações</Text>
            </Pressable>

            <Pressable style={{alignItems: 'center', justifyContent: 'center',}}>
                <Feather name="more-horizontal" size={25} color='#a3a3a3'/>
                <Text style={{color: '#a3a3a3'}}>Mais</Text>
            </Pressable>
        </View>
    )
}